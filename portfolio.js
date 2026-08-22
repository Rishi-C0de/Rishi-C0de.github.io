document.addEventListener("DOMContentLoaded", () => {
  // 1. Force visibility instantly so elements show up no matter what
  try {
    initScrollReveal();
  } catch (e) { console.error("Reveal Error:", e); }

  // 2. Initialize your original features
  try {
    initNavigation();
  } catch (e) { console.error("Nav Error:", e); }

  try {
    initTypingLoop();
  } catch (e) { console.error("Typing Error:", e); }
  
  // 3. Initialize upgraded form validations
  try {
    initContactForm();
  } catch (e) { console.error("Form Error:", e); }
});

/**
 * Force everything to show up immediately
 */
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach(el => {
    el.classList.add("is-visible");
  });
}

/**
 * Handles Mobile Menu and Navigation (Your Original Logic)
 */
function initNavigation() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

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
}

/**
 * Controls the typing animation (Your Original Logic)
 */
function initTypingLoop() {
  const typingTarget = document.querySelector(".typing-text span");
  if (!typingTarget) return;

  const words = ["student", "developer", "designer", "learner"];
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeLoop() {
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
    setTimeout(typeLoop, timeout);
  }
  typeLoop();
}

/**
 * Upgraded Form Controls with Debounced Validation, Live Counters & Toasts
 */
function initContactForm() {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  const inputs = form.querySelectorAll("input, textarea");
  const textarea = form.querySelector("#message");
  const counterDisplay = form.querySelector("#counter-display");

  inputs.forEach(input => {
    if (input.name === "_honey" || input.type === "hidden") return;
    input.addEventListener("input", debounce(() => {
      validateField(input);
    }, 400));
  });

  if (textarea && counterDisplay) {
    textarea.addEventListener("input", () => {
      const length = textarea.value.length;
      counterDisplay.textContent = `${length} / 500`;
      counterDisplay.classList.toggle("warning", length >= 400 && length < 500);
      counterDisplay.classList.toggle("maxed", length >= 500);
    });
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let isFormValid = true;

    inputs.forEach(input => {
      if (input.name === "_honey" || input.type === "hidden") return;
      if (!validateField(input)) isFormValid = false;
    });

    if (!isFormValid) {
      showToast("Please correct the validation errors.", "error", "fa-exclamation-circle");
      return;
    }

    await sendFormData(form);
  });
}

function validateField(input) {
  const container = input.closest(".form-control");
  if (!container) return true; 

  const errorStringEl = container.querySelector(".field-msg");
  let isValid = true;
  let msg = "";

  if (input.required && !input.value.trim()) {
    isValid = false;
    msg = "This field cannot be left blank.";
  } else if (input.type === "email" && input.value.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.value.trim())) {
      isValid = false;
      msg = "Please type a valid email layout.";
    }
  }

  if (!isValid) {
    container.classList.add("is-invalid");
    container.classList.remove("is-valid");
    if (errorStringEl) errorStringEl.textContent = msg;
  } else {
    container.classList.remove("is-invalid");
    container.classList.add("is-valid");
    if (errorStringEl) errorStringEl.textContent = "";
  }

  return isValid;
}

async function sendFormData(form) {
  const submitBtn = form.querySelector(".contact-submit");
  if (!submitBtn) return;
  
  const btnText = submitBtn.querySelector(".btn-text");
  const formData = new FormData(form);

  try {
    submitBtn.classList.add("is-loading");
    if (btnText) btnText.textContent = "Sending...";

    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      showToast("Success! Your message was submitted.", "success", "fa-check-circle");
      form.reset();
      form.querySelectorAll(".form-control").forEach(c => c.classList.remove("is-valid"));
    } else {
      throw new Error();
    }
  } catch (err) {
    showToast("Transmission failure.", "error", "fa-wifi");
  } finally {
    submitBtn.classList.remove("is-loading");
    if (btnText) btnText.textContent = "Send Message";
  }
}

function showToast(message, type = "success", iconClass = "fa-check-circle") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<i class="fa-solid ${iconClass}"></i><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("fade-out");
    toast.addEventListener("transitionend", () => toast.remove());
  }, 4000);
}

function debounce(func, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}
