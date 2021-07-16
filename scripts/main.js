"use strict";


//lazy load & parallax init

var lazyLoaders = $(".lazy-load");
var parallaxer = $(".parallax");
var backB = $(".back-to-top");
var winHeight = $(".windowHeight");


function triggerLoad() {
  lazyLoaders.each(function () {
    if (
      this.getBoundingClientRect().top - window.innerHeight <=
      -window.innerHeight / 10
    ) {
      $(this).addClass("lazy-load-triggered");
    }
  });
}


/* parallex*/


function parallax() {
  parallaxer.each(function () {
    let pos = this.getBoundingClientRect().top;
    if (pos >= 0 && pos <= window.innerHeight) {
      let x = -pos / 20;
      $(this).css("transform", `translateY(${x}px)`);
    }
  });
}


$(document).ready(function () {
  triggerLoad();
  parallax();
  returnWinHeight();
});


$(window).resize(function () {
  returnWinHeight();
});

$(document).scroll(function () {
  triggerLoad();
  parallax();
  showBackButton();
  didScroll = true;
});

function returnWinHeight() {
  let winHeight = $(window).height();
}





