VANTA.TRUNK({
    el: "#background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 0.5,
    scaleMobile: 1.0,
    color: 0xa9d6b4,
    backgroundColor: 0xe8f2ea,
    spacing: 10,
    chaos: 1.5
});

// 
// GSAP
// 

window.onload = function () {

    var timeline = new TimelineMax();
    timeline.from("#title,#title1", 1, { scale: 0.5 }, 0)
    timeline.from("#heroText", 5, { opacity: 0 }, 0)


}

