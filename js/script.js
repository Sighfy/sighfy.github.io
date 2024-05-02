const options = {
  interactivity: {
    events: {
      //onClick: {
      //  enable: true,
      //  mode: "push",
      //},
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      push: {
        quantity: 6,
      },
      repulse: {
        distance: 100,
        duration: 0.4
      },
    },
  },
  fullScreen: {
    enable: false
  },
  fpsLimit: 60,
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: true,
      speed: { min: 1, max: 1 },
    },
    number: {
      density: {
          enable: true,
        },
      value: 60,
    },
    opacity: {
      value: { min: 0.3, max: 0.7 },
    },
    shape: {
      type: ["triangle","circle"],
    },
    size: {
      value: { min: 1, max: 3 },
    },
    detectRetina: true,
  },
};

// Load particles
tsParticles.load("tsparticles", options);


document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});

const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {
  const isLightTheme = document.body.classList.contains("light-theme");
  if (isLightTheme) {
    enableDarkMode();
    enableDarkText();
  } else {
    enableLightMode();
    enableLightText();
  }
});

function enableDarkMode() {
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
  document.querySelector(".hero h1").classList.remove("has-text-light");
  document.querySelector(".hero h1").classList.add("has-text-grey-dark");
}

function enableLightMode() {
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
  document.querySelector(".hero h1").classList.remove("has-text-grey-dark");
  document.querySelector(".hero h1").classList.add("has-text-light");
}

function enableDarkText() {
  const textElements = document.querySelectorAll(".has-text-grey-dark");
  textElements.forEach(element => {
    element.classList.remove("has-text-grey-dark");
    element.classList.add("has-text-grey-light");
  });
}

function enableLightText() {
  const textElements = document.querySelectorAll(".has-text-grey-light");
  textElements.forEach(element => {
    element.classList.remove("has-text-grey-light");
    element.classList.add("has-text-grey-dark");
  });
}

function setThemePreference() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    enableDarkMode();
    enableDarkText();
    return;
  }
  enableLightMode();
  enableLightText();
}

document.onload = setThemePreference();
