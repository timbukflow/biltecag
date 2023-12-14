$( document ).ready(function() {
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
    animateOnScroll('rotativ', 'rotativImg', 39, 'rotativ');
    animateOnScroll('kubisch', 'kubischImg', 36, 'kubisch');

});
