var tl = gsap.timeline();

tl.from("#loader h3", {
    x:40,
    opacity: 0,
    duration:1,
    stagger: 0.1
})

tl.to("#loader h3", {
    opacity:0,
    x: -40,
    duration: 1,
    stagger: 0.1
})

tl.to("#loader", {
    opacity: 0
})

tl.to("#loader", {
    display: "none"
})
tl.from("#page1-content h1 span", {
    y: 100,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5
})

var page1Content = document.querySelector("#page1-content");
var cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove", function(dets) {
    gsap.to(cursor, {
        x: dets.clientX,
        y: dets.clientY,
    })
})

page1Content.addEventListener('mouseenter', function() {
    gsap.to(cursor, {
        scale: 1,
        opacity: 1
    })
})
page1Content.addEventListener('mouseleave', function() {
    gsap.to(cursor, {
        scale:0,
        opacity: 0
    })
})

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();

locomotiveScroll();

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true
        }
      });
}
swiperAnimation();
function locomotiveScroll() {
    var locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
}