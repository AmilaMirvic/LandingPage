$(document).ready(function() {

  
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1) {
        $('body').addClass("sticky");
      } else {
        $('body').removeClass("sticky");
      }
    });

    document.getElementById("box").style.marginBottom = "20px";

    $('#nav-icon1').click(function() {
      $(this).toggleClass('open');
      $("body").toggleClass("menu-active");
    });

});