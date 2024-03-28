const options = {
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        //onHover: {
        //  enable: true,
        //  mode: "repulse",
        //},
      },
      modes: {
        push: {
          quantity: 6,
        },
        repulse: {
          distance: 100,
        },
      },
    },
    particles: {
      links: {
        enable: true,
        opacity: 0.3,
        distance: 200,
      },
      move: {
        enable: true,
        speed: { min: 1, max: 1 },
      },
      opacity: {
        value: { min: 0.3, max: 0.7 },
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
  };

  // Load particles into the particles-container
  tsParticles.load("particles-container", options);
