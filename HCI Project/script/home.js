$(document).ready(function () {
  let images = $(" .slidescontent img");
  let index = 0;
  images.hide();
  images.eq(index).show();

  $("#leftBtn").click(function () {
    images.eq(index).animate(
      {
        left: "-100px",
        opacity: 0,
      },
      function () {
        images.eq(index).hide();
        if (index == 0) {
          index = images.length - 1;
        } else {
          index -= 1;
        }
        images.eq(index).show();
        images.eq(index).css("left", "100px");
        images.eq(index).css("opacity", "0");
        images.eq(index).animate({
          left: "0px",
          opacity: 1,
        });
      }
    );
  });

  $("#rightBtn").click(function () {
    images.eq(index).animate(
      {
        left: "100px",
        opacity: 0,
      },
      function () {
        images.eq(index).hide();
        if (index == images.length - 1) {
          index = 0;
        } else {
          index += 1;
        }
        images.eq(index).show();
        images.eq(index).css("left", "-100px");
        images.eq(index).css("opacity", "0");
        images.eq(index).animate({
          left: "0px",
          opacity: 1,
        });
      }
    );
  });
});
