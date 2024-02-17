function init(){

    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('.container'),
        smooth: true
    });

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".container", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },

pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

init();

var show = document.querySelector('.main');
var up = document.querySelector('.headi');
var contain = document.querySelector('.contain');

var hide = document.querySelector('.landing');
setTimeout(() => {
    hide.style.display = 'none';

}, 5000);

var tl = new TimelineMax();

tl.to(contain,3,{
    opacity:1,
    ease:Power2.easeInOut,
})

tl.to(contain,2,{
    opacity:0,
    ease:Power2.easeInOut,
},"-=1")

tl.to(hide,3,{
    y:'-100%',
    ease:Power4.easeOut,
    duration:3
},"-=1")

tl.to(".navbar",1,{
    opacity:1,
    ease:Power2.easeInOut,
})


tl.from(".up", 1.8, {
    opacity:"0",
    y: 100,
    ease:Power4.easeOut,
    skewY: 7,
    stagger: {
      amount: 0.3
    }
  })

  gsap.from(show,3,{
    opacity:0,
    ease:Power4.easeOut,
    y:"5%",
    duration:2,
})


