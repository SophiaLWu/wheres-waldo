$(document).ready(function() {

  var hideTargetInfo = function() {
    $(".target-choices").css("visibility", "hidden")
    $(".target-box").css("visibility", "hidden")
  };

  var findTarget = function() {
    $("#puzzle-image").on("click", function(e) {
      if ($(".target-box").css("visibility") === "visible") {
        hideTargetInfo();
      }
      else {
        var mouseX = e.pageX;
        var mouseY = e.pageY;
        var target_box_width = parseInt($(".target-box").css("width"), 10);
        var target_box_height = parseInt($(".target-box").css("height"), 10);
        $(".target-choices").css({ visibility: "visible",
                                          top: mouseY - target_box_height/2 + "px",
                                          left: mouseX + target_box_width/2 + "px" });
        $(".target-box").css({ visibility: "visible",
                                      top: mouseY - target_box_height/2 + "px",
                                      left: mouseX - target_box_width/2 + "px" });
      }
    });

    $(".target-box").on("click", function(e) {
    hideTargetInfo();
    });

    $(".target-choices").on("click", function(e) {
      hideTargetInfo();
    });
  }

  findTarget();
  
});