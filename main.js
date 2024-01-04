$( document ).ready(function() {
    /////////// Navigation ///////////
    // Nav fadin fadout on scroll
    const nav = document.querySelector('nav');
    let lastScrollTop = 0;
    const navShowThreshold = 100;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop + navShowThreshold) {
        nav.style.top = '-90px';
        lastScrollTop = scrollTop;
        } else if (scrollTop < lastScrollTop - navShowThreshold) {
        nav.style.top = '0';
        lastScrollTop = scrollTop;
        }
    });

    // Nav Submenu
    function handleSubmenu() {
      if ($(window).width() > 960) {
          $('.menu').mouseenter(function() {
              $(this).find('.submenu').stop(true).slideDown(300, 'linear');
          }).mouseleave(function() {
              $(this).find('.submenu').stop(true).slideUp(300, 'linear');
          });
      } else {
          $('.menu').off('mouseenter mouseleave');
      }
    }
    handleSubmenu();
    $(window).resize(function() {
        handleSubmenu();
    });

    // Nav Mobile
    $(".burger-icon").click(function() {
      $(this).children().toggleClass("spread");
      $(".nav-list").stop(true,true).slideToggle(800);
      $("body").toggleClass("fixed");
    });

    // Nav Bookmark 
    $('.bookmark').click(function(e) {
        
        $('body').removeClass('fixed');
        $('.nav-list').slideUp();

        var target = $(this).data('target');
        var offset = $(target).offset().top - 50;

        $('html, body').animate({
            scrollTop: offset
        }, 1000);
    });
  

    /////////// Fadin Function /////////////  
    const fadeInElements = $('.fadein');
  
    function checkFadeIn() {
      const windowHeight = $(window).height();
  
      fadeInElements.each(function() {
        const elementTop = $(this).offset().top;
        const scrollPosition = $(window).scrollTop();
  
        if (elementTop < windowHeight * 1 + scrollPosition) {
          $(this).css({transform: 'translateY(0)'});
        } else {
          $(this).css({transform: 'translateY(100px)'});
        }
      });
    }
  
    $(window).on('scroll', checkFadeIn);
    checkFadeIn();

    /////////// Counter /////////////
    $(window).scroll(() => {
      $('.counter:not([data-counted="true"])').each(function() {
        const rect = this.getBoundingClientRect();
        const inView = rect.top <= window.innerHeight && rect.bottom >= 0;
    
        if (inView) {
          const $this = $(this).attr('data-counted', 'true');
          const target = $this.data('target');
    
          $({ count: 0 }).animate({ count: target }, {
            duration: 5000,
            step() { $this.text(Math.floor(this.count)); },
            complete() { $this.text(this.count); }
          });
        }
      });
    }).trigger('scroll');

    /////////// Product Button Img Rotation /////////////
    $(".proC button").hover(
      function() {
        $(this).closest('.proC').find('picture').find('img').addClass('img-rotate');
      }, 
      function() {
          $(this).closest('.proC').find('picture').find('img').removeClass('img-rotate');
      }
    );

});
