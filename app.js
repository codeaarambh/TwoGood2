function locoani() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
    smoothMobile: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  // const scroll = new LocomotiveScroll({
  //   el: document.querySelector(".main"),
  //   smooth: true,
  //   smoothMobile: true,
  // });
}
locoani();

function navbarani() {
  gsap.to(".nav-p1 img", {
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: ".page1",
      scroller: ".main",
      start: "top top",
      end: "top -5%",
      scrub: true,
      ease: "linear",
    },
  });
  gsap.to(".nav-p2 .links", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: ".page1",
      scroller: ".main",
      start: "top top",
      end: "top -5%",
      scrub: true,
      ease: "linear",
    },
  });
}
navbarani();

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
  gsap.from(".page3-textb", {
    // y:100,
   y:100,
    opacity: 0,

    scrollTrigger: {
      trigger: ".page3-textb",
      scroller: ".main",
      // markers: true,
 
      // scrub:true,
    },
    duration: 0.4,
    stagger: 0.2,
  });
  gsap.from(".page2 .elem", {
    // y:100,
    scale: 0.7,
    opacity: 0,

    scrollTrigger: {
      trigger: ".page2",
      scroller: ".main",
      // markers: true,
      start: "top 30%",
      // scrub:true,
    },
    duration: 0.4,
    stagger: 0.4,
  });



  gsap.from(".page3 .child", {
    // y:100,
    scale: 0.3,
    opacity: 0,

    scrollTrigger: {
      trigger: ".page3",
      scroller: ".main",
      // markers: true,
      start: "top 60%",
      // scrub:true,
    },
    duration: 0.2,
    stagger: 0.3,
  });
}
apageAnimation();

function cursoranimation() {
  document.addEventListener("mousemove", function (a) {
    gsap.to(".cursor", {
      left: a.x,
      top: a.y,
    });
  });

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
}
cursoranimation();
