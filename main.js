$(document).ready(function() {

    const container = document.getElementById('container');
    const totalFrames = 5;
    
    let last_known_scroll_position = 0;
    
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= window.innerHeight &&
        rect.bottom >= 0 &&
        rect.left <= window.innerWidth &&
        rect.right >= 0
      );
    }
    
    window.addEventListener('scroll', function() {
      let scroll_position = window.scrollY;
    
      // Überprüfe, ob der Container im Viewport ist
      if (!isElementInViewport(container)) {
        return;
      }
    
      // Berechne den Index des anzuzeigenden Frames
      let frameIndex = Math.floor((scroll_position / document.body.scrollHeight) * totalFrames);
    
      // Begrenze den Frame-Index zwischen 0 und totalFrames - 1
      frameIndex = Math.min(Math.max(frameIndex, 0), totalFrames - 1);
    
      // Aktualisiere den Hintergrund des Containers
      container.style.backgroundImage = `url('./img/rotativ${frameIndex}.png')`;
    });

});
