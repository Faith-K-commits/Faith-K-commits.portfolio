const menuIcon = document.querySelector(".menu-icon");
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const navLinkElements = document.querySelectorAll(".nav-link");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  if (menuIcon.textContent === "☰") {
    menuIcon.textContent = "✕";
  } else {
    menuIcon.textContent = "☰";
  }
});

navLinkElements.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuIcon.textContent = "☰";
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !menuButton.contains(e.target)) {
    navLinks.classList.remove("active");
    menuIcon.textContent = "☰";
  }
});

// Fade-in animation for project items
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((element) => {
  observer.observe(element);
});
