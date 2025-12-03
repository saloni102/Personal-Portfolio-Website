// Smooth scroll & Active nav link
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY;
  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop + 100 &&
      section.offsetTop + section.offsetHeight > fromTop + 100
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "rgba(20, 20, 30, 0.95)";
  } else {
    header.style.background = "rgba(20, 20, 30, 0.75)";
  }
});

// Simple reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.section, .project, .skill').forEach(el => {
  el.classList.add('fade');
  observer.observe(el);
});

// Fade-in animation style
const style = document.createElement("style");
style.textContent = `
.fade { opacity: 0; transform: translateY(20px); transition: all 0.8s ease; }
.fade.visible { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);
