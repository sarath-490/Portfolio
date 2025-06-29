// ===================== Typing Text =====================
const typingText = "Full Stack Developer | C++ Programmer | MERN Enthusiast | Cloud & AI Explorer";
const typingTarget = document.getElementById("typing-text");
let index = 0;

(function typeWriter() {
  if (index < typingText.length) {
    typingTarget.textContent += typingText.charAt(index++);
    setTimeout(typeWriter, 50);
  }
})();

// ===================== Reveal on Scroll =====================
const revealElements = document.querySelectorAll(".section, .project-card, .skill, .cert-card");

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => {
  el.classList.add("hidden");
  revealObserver.observe(el);
});

// ===================== Skill Bar Fill on Scroll =====================
const skillBars = document.querySelectorAll(".skill");

if ('IntersectionObserver' in window) {
  const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      console.log('Skill bar observed:', entry.target);
      if (entry.isIntersecting) {
        const percent = entry.target.dataset.value;
        const bar = entry.target.querySelector(".skill-bar > div");
        console.log('Filling bar to:', percent);
        bar.style.width = percent + "%";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(skill => skillObserver.observe(skill));
} else {
  console.warn('IntersectionObserver is not supported in this browser.');
}

// ===================== Section Zoom-In Effect =====================
const sections = document.querySelectorAll(".section");

const sectionZoomObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => {
  sectionZoomObserver.observe(section);
});

// ===================== Coming Soon Buttons =====================
document.querySelectorAll('.coming-soon').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    alert('Coming Soon!');
  });
});
