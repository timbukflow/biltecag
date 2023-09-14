$( document ).ready(function() {
    // navigation
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

    // Animation Start
    function animateOnScroll(containerId, imageId, totalFrames, imagePrefix) {
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
  
  animateOnScroll('rotativ', 'rotativImg', 12, 'rotativ');
  animateOnScroll('kubisch', 'kubischImg', 38, 'kubisch');


    //  Fadin Function
    const fadeInElements = $('.fadein');
  
    function checkFadeIn() {
      const windowHeight = $(window).height();
  
      fadeInElements.each(function() {
        const elementTop = $(this).offset().top;
        const scrollPosition = $(window).scrollTop();
  
        if (elementTop < windowHeight * 1 + scrollPosition) {
          $(this).css({opacity: 1, transform: 'translateY(0)'});
        } else {
          $(this).css({opacity: 0.25, transform: 'translateY(100px)'});
        }
      });
    }
  
    $(window).on('scroll', checkFadeIn);
    checkFadeIn();

});
