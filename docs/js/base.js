$(document).ready(function() {
  $('.cover .title, .cover .sub-title, .cover .author, .cover .affiliation').lettering('words');

  $(window).scroll(function(){
    if ($(window).scrollTop() >= $(window).height()) {
      $('.contents').addClass('scrolled-to');
    }
    else {
      $('.contents').removeClass('scrolled-to');
    }
  });

  $('.toggle-contents').on('click', function(e) {
    $('.contents').toggleClass("show");
    e.preventDefault();
  });

});
