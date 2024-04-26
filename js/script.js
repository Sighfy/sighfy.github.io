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