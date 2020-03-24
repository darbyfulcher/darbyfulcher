(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Show the video when the Watch Me button is clicked
  $('#videoButton').click(function() {
    console.log("video button clicked");
    // show video
    $('.video').removeClass('hide');
    //show x button
    // $('.videoClose').removeClass('hide');
    $('.videoClose').css("display","inline-block");
  });

//Show the x Button when the Watch Me button is clicked


  // Close the video when the X is clicked
  $('.videoClose').click(function() {
    console.log("video button clicked");
    // hide the video
    $('.video').addClass('hide');
    // stop the video
    // $('.video').pauseVideo();
    // var player = new YT.Player('video', {
    //   events: {
    //     // call this function when player is ready to use
    //     'onReady': onPlayerReady
    //   }
    // }).pauseVideo();
    // $('.video').each(function(){
    //   $(this).stopVideo();
    // });
    $('.yt_player_iframe').each(function(){
      this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
    });
    // hide the x button
    $('.videoClose').css("display","none");
  });

  // //hide the x button when the x button is clicked
  // $('#videoButton').click(function() {
  //   console.log("video button clicked");
  //   // $('.watchVideo').addClass('hide')
  //   $('#videoButton').addClass('hide');
  // });


  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });


  // // global variable for the player
  // var player;
  //
  // // this function gets called when API is ready to use
  // function onYouTubePlayerAPIReady() {
  //   // create the global player from the specific iframe (#video)
  //   player = new YT.Player('video', {
  //     events: {
  //       // call this function when player is ready to use
  //       'onReady': onPlayerReady
  //     }
  //   });
  // }
  //
  // function onPlayerReady(event) {
  //
  //   // bind events
  //   var playButton = document.getElementById("play-button");
  //   playButton.addEventListener("click", function() {
  //     player.playVideo();
  //   });
  //
  //   var pauseButton = document.getElementById("pause-button");
  //   pauseButton.addEventListener("click", function() {
  //     player.pauseVideo();
  //   });
  //
  // }
  //
  // // Inject YouTube API script
  // var tag = document.createElement('script');
  // tag.src = "//www.youtube.com/player_api";
  // var firstScriptTag = document.getElementsByTagName('script')[0];
  // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

})(jQuery); // End of use strict
