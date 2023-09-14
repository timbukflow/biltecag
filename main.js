const container = document.getElementById('container');
const animatedImage = document.getElementById('animatedImage');
const totalFrames = 12;
let animationStarted = false;

function isElementEnteringViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return (rect.top <= windowHeight && rect.bottom >= 0) && rect.top >= 0;
}

window.addEventListener('scroll', function() {
  if (isElementEnteringViewport(container) && !animationStarted) {
    animationStarted = true;
  }

  if (!animationStarted) {
    return;
  }

  const scroll_position = window.scrollY - container.offsetTop;
  let frameIndex = Math.floor(scroll_position / 15);
  
  frameIndex = Math.max(0, Math.min(frameIndex, totalFrames - 1));

  animatedImage.src = `./img/rotativ${frameIndex}.webp`;
});
