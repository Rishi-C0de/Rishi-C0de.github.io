document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const typingTarget = document.querySelector(".typing-text span");
  const galleryImages = document.querySelectorAll(".gallery-image");
  const contactForm = document.querySelector(".contact-form");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const words = ["student", "developer", "designer", "learner"];

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeLoop() {
    if (!typingTarget) return;

    const currentWord = words[wordIndex];
    charIndex += deleting ? -1 : 1;
    typingTarget.textContent = currentWord.slice(0, charIndex);

    let timeout = deleting ? 55 : 95;

    if (!deleting && charIndex === currentWord.length) {
      deleting = true;
      timeout = 1200;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      timeout = 240;
    }

    window.setTimeout(typeLoop, timeout);
  }

  typeLoop();

  if (galleryImages.length > 0 && !prefersReducedMotion) {
    let activeIndex = 0;
    window.setInterval(() => {
      galleryImages[activeIndex].classList.remove("active");
      activeIndex = (activeIndex + 1) % galleryImages.length;
      galleryImages[activeIndex].classList.add("active");
    }, 3400);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, { threshold: 0.14 });

  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));

  if (!prefersReducedMotion) {
    document.querySelectorAll(".tilt-card").forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const rotateY = (x - 0.5) * 8;
        const rotateX = (0.5 - y) * 8;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
      });

      card.addEventListener("pointerleave", () => {
        card.style.transform = "";
      });
    });
  }

  document.querySelectorAll(".exp-box .toggle-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".exp-box");
      if (!card) return;

      card.classList.toggle("expanded");
      button.textContent = card.classList.contains("expanded") ? "Read Less" : "Read More";
    });
  });

  const aboutToggle = document.querySelector(".about-toggle");
  if (aboutToggle) {
    aboutToggle.addEventListener("click", () => {
      const aboutText = aboutToggle.closest(".about-text");
      if (!aboutText) return;

      aboutText.classList.toggle("expanded");
      aboutToggle.textContent = aboutText.classList.contains("expanded") ? "Read Less" : "Read More";
    });
  }

  if (contactForm) {
    const submitButton = contactForm.querySelector(".contact-submit");
    const status = contactForm.querySelector(".form-status");

    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (!submitButton || !status) return;

      status.textContent = "Sending message...";
      status.classList.remove("is-success", "is-error");
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";

      try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method: "POST",
          headers: {
            Accept: "application/json"
          },
          body: formData
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        status.textContent = "Message sent successfully. I'll get back to you soon.";
        status.classList.add("is-success");
        contactForm.reset();
      } catch (error) {
        status.textContent = "Message could not be sent right now. Please try again in a moment.";
        status.classList.add("is-error");
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Send Message";
      }
    });
  }
});
