$( document ).ready(function() {
    var mainText = $(".main-text");
    var cloud = $(".cloud");
    var topHeaderFon = $(".top-header-fon");
    var topText = $(".top-text");
    var scrollText = $(".scroll-text");
    mainText.click(function() {
      cloud.toggleClass("active");
      topHeaderFon.toggleClass("active");
      topText.toggleClass("active");
      scrollText.toggleClass("active");
  });
});



// .top-header-fon {
//     width: 100%;
//     position: fixed;
//     top: 0;
//     left: 0;
//     z-index: 10;
// }



// .top-text {
//     h2 {
//         font-size: 35px;
//         line-height: 82px;
//         letter-spacing: 0.4em;
//         color: #000000;
//         margin-bottom: 35px;
//     }
// }



// .scroll-text {
//     position: relative;
//     h2{
//         font-size: 25px;
//         line-height: 69px;
//         letter-spacing: 0.4em;
//         color: #FFFFFF;
//         &:after {
//             content: '';
//             position: absolute;
//             top: 80px;
//             left: 50%;
//             transform: translate(-50%, 0);
//             width: 5px;
//             background-color: #fff;
//             height: 80px;
//         } 
//     } 
// }