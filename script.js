
document.addEventListener('DOMContentLoaded', function () {

  // smooth scroll for header nav
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  document.querySelectorAll('.poster img').forEach(img => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
      img.parentElement.style.background = 'linear-gradient(135deg,#667eea,#764ba2)';
    });
  });
  const shapes = document.querySelectorAll('.bg-shape');
  function adaptShapes(){
    if (window.innerWidth < 700) {
      shapes.forEach(s => s.style.opacity = 0.06);
    } else {
      shapes.forEach(s => s.style.opacity = 0.12);
    }
  }
  adaptShapes();
  window.addEventListener('resize', adaptShapes);
const cards = document.querySelectorAll('.tool-card');

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0px 0px 35px rgba(130, 160, 100, 0.6)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "none";
    });
});

});
