$( document ).ready(function() {
  var mainText = $(".main-text");
  var cloud = $(".cloud");
  var topHeaderFon = $(".top-header-fon");
  var topText = $(".top-text");
  var scrollText = $(".scroll-text");
  var slideNum = $(".slide-number");
  mainText.click(function() {
    cloud.toggleClass("active");
    topHeaderFon.toggleClass("active");
    topText.toggleClass("active");
    scrollText.toggleClass("active");
    $("body").toggleClass("active");
    if(slideNum.text() === "01") {
      slideNum.text("02");
    } else {
      slideNum.text("01");
    }
  });
  if(scrollText) {
    scrollText.click(function(event) {
      window.scroll({
        left: 0,
        top: window.innerHeight,
        behavior: "smooth"
      })
    });
  }
});