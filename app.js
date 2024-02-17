const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  smoothMobile:true,
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
apageAnimation();

document.addEventListener("mousemove",function(a){
  gsap.to(".cursor",{
    left:a.x,
    top:a.y
  })
})
// document.querySelector("#child1").addEventListener("mouseenter", function() {
//   gsap.to(".cursor", {
//     transform: "translate(-50% ,-50%)scale(1)",
    
//   });
// });
// document.querySelector("#child1").addEventListener("mouseleave", function() {
//   gsap.to(".cursor", {
//     transform: "translate(-50% ,-50%)scale(0)"
//   });
// });

// var a = document.querySelectorAll(".child");
// a.forEach(function (elem) {
//   elem.addEventListener("mouseenter", function () {
//     gsap.to(".cursor", {
//       transform: "translate(-50%, -50%) scale(1)",
//     });
//   });
//   elem.addEventListener("mouseleave", function () {
//     gsap.to(".cursor", {
//       transform: "translate(-50%, -50%) scale(0)",
//     });
//   });
// });
var a = document.querySelectorAll(".child");
var colors = ["#e5f0d6", " #f5dfcf", "#00000070", "pink"];
a.forEach(function (elem, index) {
  elem.addEventListener("mouseenter", function () {
    gsap.to(".cursor", {
      transform: "translate(-50%, -50%) scale(1)",
      backgroundColor: colors[index],
    });
  });
  elem.addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
      transform: "translate(-50%, -50%) scale(0)",
    });
  });
});
