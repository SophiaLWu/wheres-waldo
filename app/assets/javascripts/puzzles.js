$(".puzzles-show").ready(function() {
  var score = 0;
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
      if ($("#score-form-container").length < 1) {
        if ($(".target-box").css("visibility") === "visible") {
          hideTargetInfo();
        }
        else {
          mouseX = e.pageX - $('#puzzle-image').offset().left;
          mouseY = e.pageY - $('#puzzle-image').offset().top;
          $(".target-choices").css({ visibility: "visible",
                                            top: mouseY - target_box_height/2 
                                                 + "px",
                                           left: mouseX + target_box_width/2 
                                                 + "px" });
          $(".target-box").css({ visibility: "visible",
                                        top: mouseY - target_box_height/2 
                                             + "px",
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
    $("#" + name + "-marker").css({  top: characterPosition[1] - marker_radius 
                                          + "px" ,
                                    left: characterPosition[0] - marker_radius 
                                          + "px" });
  };

  var informValidityGuess = function(guess) {
    var text = guess ? "Good find!" : "Try again!";
    $("body").append("<div class='validity-info'><h2>" + text + "<h2></div>");
    setTimeout(function() {
      $(".validity-info").remove()
    }, 2000);
  };

  // Checks if a guess is correct. If correct, adds a marker, removes character
  // from target choices list, and checks for win
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
      $.ajax({
        url: "/scores/new",
        type: "GET",
        dataType: "html",
        data: { score: score, 
                puzzle_id: $("meta[name='Waldo']").attr("puzzle_id") },
        success: function(response) {
          $("body").append(response);
        },
        error: function() {
          alert("Error occured. Please try again");
        }
      });
    }
  }

  // Counts the time
  var timer = function() {
    setTimeout(function() {
      score += 1;
      if ($("#score-form-container").length < 1) {
        $(".time").text(score);
      } else {
        clearInterval(timer);
      }
      timer();
    }, 1000)
  };

  photoOnClick();
  targetInfoOnClick();
  checkGuess();
  timer();

});
