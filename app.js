const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
function apageAnimation() {
  let a = gsap.timeline();
  a.from(".page1 h1 ", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
    delay: 0.6,
  });
  a.from(".page1 img", {
    scale: 0.5,
    opacity: 0,
    duration: 0.3,
  });
  a.from(".circular-text", {
    opacity: 0,
    delay: -0.4,
  });
  a.from(".line", {
    opacity: 0,
  });
}
// apageAnimation();
