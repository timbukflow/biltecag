$( document ).ready(function() {
    /////////// Navigation ///////////
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

    /////////// Animation Start ///////////
    // Funktion zum Vorladen der Bilder
    function preloadImages(totalFrames, imagePrefix) {
        for (let i = 0; i < totalFrames; i++) {
        const img = new Image();
        img.src = `./img/${imagePrefix}${i}.webp`;
        }
    }
  
    // Funktion zur Animation beim Scrollen
    function animateOnScroll(containerId, imageId, totalFrames, imagePrefix) {
        // Bilder vorladen
        preloadImages(totalFrames, imagePrefix);
    
        const container = document.getElementById(containerId);
        const animatedImage = document.getElementById(imageId);
        let animationStarted = false;
    
        function isElementEnteringViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return (rect.top <= windowHeight && rect.bottom >= 0) && rect.top >= 0;
        }
    
        function handleScroll() {
        if (isElementEnteringViewport(container) && !animationStarted) {
            animationStarted = true;
        }
    
        if (!animationStarted) {
            return;
        }
    
        const scroll_position = window.scrollY - container.offsetTop;
        
        let frameIndex = Math.floor(scroll_position / 10);
        frameIndex = Math.max(0, Math.min(frameIndex, totalFrames - 1));
    
        animatedImage.src = `./img/${imagePrefix}${frameIndex}.webp`;
        }
    
        window.addEventListener('scroll', handleScroll);
    }
    
    // Animationen für 'rotativ' und 'kubisch'
    animateOnScroll('rotativ', 'rotativImg', 12, 'rotativ');
    animateOnScroll('kubisch', 'kubischImg', 36, 'kubisch');
  

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
      

});
