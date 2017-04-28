$(document).ready(function() {

  var mouseX;
  var mouseY;
  var target_box_width = parseInt($(".target-box").css("width"), 10);
  var target_box_height = parseInt($(".target-box").css("height"), 10);

  var hideTargetInfo = function() {
    $(".target-choices").css("visibility", "hidden");
    $(".target-box").css("visibility", "hidden");
  };

  var photoOnClick = function() {
    $("#puzzle-image").on("click", function(e) {
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
                                      top: mouseY - target_box_height/2 + "px",
                                     left: mouseX - target_box_width/2
                                           + "px" });
      }
    });
  };

  var targetInfoOnClick = function() {
    $(".target-box").on("click", function(e) {
      hideTargetInfo();
    });

    $(".target-choices").on("click", function(e) {
      hideTargetInfo();
    });
  };

  var getCharacterPosition = function($character) {
    var x_position = parseInt($("meta[name='" + $character.data("name") +
                                "']").attr("x_position"), 10);
    var y_position = parseInt($("meta[name='" + $character.data("name") +
                                "']").attr("y_position"), 10);
    return [x_position, y_position];
  };

  var checkGuess = function() {
    $(".character").on("click", function() {
      var characterPosition = getCharacterPosition($(this));
      if (mouseX - target_box_width/2 <= characterPosition[0] &&
          characterPosition[0] <= mouseX + target_box_width/2 &&
          mouseY - target_box_height/2 <= characterPosition[1] &&
          characterPosition[1] <= mouseY + target_box_height/2) {
        alert("FOUND");
      }
    });
  }

  photoOnClick();
  targetInfoOnClick();
  checkGuess();
});