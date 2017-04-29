$(document).ready(function() {

  var gameover = false;
  var mouseX;
  var mouseY;
  var target_box_width = parseInt($(".target-box").css("width"), 10);
  var target_box_height = parseInt($(".target-box").css("height"), 10);
  var marker_radius = target_box_width / 2;

  // Makes target box/choices not visible
  var hideTargetInfo = function() {
    $(".target-choices").css("visibility", "hidden");
    $(".target-box").css("visibility", "hidden");
  };

  // Adds or hides target box/choices when user clicks on photo
  var photoOnClick = function() {
    $("#puzzle-image").on("click", function(e) {
      if (!gameover) {
        if ($(".target-box").css("visibility") === "visible") {
          hideTargetInfo();
        }
        else {
          mouseX = e.pageX - $('#puzzle-image').offset().left;
          mouseY = e.pageY - $('#puzzle-image').offset().top;
          console.log(mouseX, mouseY);
          $(".target-choices").css({ visibility: "visible",
                                            top: mouseY - target_box_height/2 
                                                 + "px",
                                           left: mouseX + target_box_width/2 
                                                 + "px" });
          $(".target-box").css({ visibility: "visible",
                                        top: mouseY - target_box_height/2 + "px",
                                       left: mouseX - target_box_width/2
                                             + "px" });
        }
      }
    });
  };

  // Hides target box/choices on click
  var targetInfoOnClick = function() {
    $(".target-box").on("click", function(e) {
      hideTargetInfo();
    });

    $(".target-choices").on("click", function(e) {
      hideTargetInfo();
    });
  };

  // Returns the position of given character in photo
  var getCharacterPosition = function($character) {
    var x_position = parseInt($("meta[name='" + $character.data("name") +
                                "']").attr("x_position"), 10);
    var y_position = parseInt($("meta[name='" + $character.data("name") +
                                "']").attr("y_position"), 10);
    return [x_position, y_position];
  };

  // Adds a marker to the photo when a character is found
  var addMarker = function(name, characterPosition) {
    if (name == "Wizard Whitebeard") name = "Wizard" // Space in name does not
                                                     // work with classes
    $(".puzzle-image-container").append("<div class='marker' id='" +
                                        name + "-marker'></div>");
    $("#" + name + "-marker").css({  top: characterPosition[1] - marker_radius + "px" ,
                                    left: characterPosition[0] - marker_radius + "px" });

  };

  var informValidityGuess = function(guess) {
    var text = guess ? "Good find!" : "Try again!";
    $("body").append("<div class='validity-info'><h2>" + text + "<h2></div>");
    $(".validity-info").delay(1000).fadeOut("slow");
  };

  // Checks if a guess is correct and adds a marker and removes character
  // from target choices list if so
  var checkGuess = function() {
    $(".character").on("click", function() {
      var characterPosition = getCharacterPosition($(this));
      if (mouseX - target_box_width/2 <= characterPosition[0] &&
          characterPosition[0] <= mouseX + target_box_width/2 &&
          mouseY - target_box_height/2 <= characterPosition[1] &&
          characterPosition[1] <= mouseY + target_box_height/2) {
        addMarker($(this).data("name"), characterPosition);
        $(".target-choices-list").find("[data-name='" + $(this).data("name") + 
                                       "']").remove();
        informValidityGuess(true);
        checkWin();
      }
      else {
        informValidityGuess(false);
      }
    });
  };

  // Checks for win and ends game if so
  var checkWin = function() {
    if ($(".character").length < 1) {
      gameover = true;
      $("body").append("<div class='win-screen'><h2>You won!<h2></div>");
    }
  }

  photoOnClick();
  targetInfoOnClick();
  checkGuess();

});
