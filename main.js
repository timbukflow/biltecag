$(document).ready(function() {
  
// Stars
const starrySky = document.querySelector('.starry-sky');

function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  star.style.animationDuration = `${Math.random() * 5 + 2}s`;
  starrySky.appendChild(star);
}

function generateStars(numStars) {
  for (let i = 0; i < numStars; i++) {
    createStar();
  }
}

generateStars(300);

// Angebot
const angebotBtn = $("#angebotBtn");
const mainContent = $(".maincontent");
const angebotContent = $(".angebotnav");
let isMainContentVisible = true;

angebotBtn.click(function() {
  if (isMainContentVisible) {
    angebotBtn.addClass("activBtn")
    mainContent.addClass("fade");
    angebotContent.stop(true,true).fadeIn(800);
  } else {
    angebotBtn.removeClass("activBtn")
    mainContent.removeClass("fade");
    angebotContent.stop(true,true).fadeOut(800);
  }
  isMainContentVisible = !isMainContentVisible;
});

// Nav responsiv
$(".burger-icon").click(function() {
  $(this).toggleClass("active");
  $(".nav-list").toggleClass("active");
});

});
