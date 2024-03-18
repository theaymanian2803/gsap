document.addEventListener("DOMContentLoaded", () => {
  let timeline = gsap.timeline();
  let timeline2 = gsap.timeline({ repeat: -1, yoyo: true, paused: true });
  timeline.from(".logo", {
    scale: 8,
    rotation: 360,
    duration: 1,
    ease: "bounce",
  });
  timeline.from(
    ".li",
    {
      x: 200,
      opacity: 0,
      duration: 1,
      stagger: { each: 0.5, from: "random" },
    },
    "<"
  );
  timeline2.from(".hero", {
    scale: 1.1,
    y: "-1rem ",

    duration: 1,
    onComplete: timeline2.play(),
    ease: "power1.inOut",
  });
  timeline.from(".heart", {
    scale: 1.1,
    color: "green",
    duration: 1,
    repeat: 5,
    ease: "bounce",
  });
  timeline.from(
    ".c",
    {
      y: 400,
      duration: 1,
      ease: "bounce",
      stagger: { each: 0.5, from: "end" },
    },
    "<"
  );

  let scroll1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".container2",
      start: "top 95% ",
      end: "top top",

      scrub: true,
    },
  });

  scroll1.from(".imgs img", {
    opacity: 0,
    scale: 0.8,
    rotation: 0,
    duration: 1,
    stagger: { each: 1 },
  });
  let scroll2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".container3",
      start: "top 90%",
      end: "top top",
      scrub: true,
    },
  });
  scroll2.fromTo(
    ".container3",
    { backgroundColor: "green", height: "0px" },
    { height: "100vh", duration: 2 }
  );

  scroll2.fromTo(
    ".fazerImage img",
    { opacity: 0, scale: 2 },
    {
      opacity: 1,
      scale: 0.8,
      stagger: { each: "center" },
      duration: 1,
      ease: "bounce",
    }
  );
  timeline.from(".logo1", {
    scale: 3,
    duration: 1,
    yoyo: true,
    repeat: -1,
    opacity: 0.2,

    ease: "power1.inOut",
  });
});
