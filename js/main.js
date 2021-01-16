$(document).ready(function () { });
 
var menuButton = $(".menu-btn");
menuButton.on('click', function () {
  console.log(' Клик по кнопке меню');
  $(".navbar-menu").toggleClass("navbar-menu--visible");
  $("body").toggleClass("no-scroll");
});
  
