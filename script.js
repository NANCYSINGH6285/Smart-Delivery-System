// Responsive menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth section reveal (optional animation)
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 250;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.classList.add('visible');
    }
  });
});
