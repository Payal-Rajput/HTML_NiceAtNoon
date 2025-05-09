



gsap.registerPlugin(ScrollTrigger);

  const cards = document.querySelector(".cards");
  const scrollLength = cards.scrollWidth - window.innerWidth;

  gsap.to(".cards", {
    x: () => `-${scrollLength}px`,
    ease: "none",
    scrollTrigger: {
      trigger: ".cards-wrapper",
      start: "top top",
      end: () => `+=${scrollLength}`,
      scrub: true,
      pin: true,
      anticipatePin: 1,
    },
  });