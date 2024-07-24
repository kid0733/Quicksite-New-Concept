VANTA.TRUNK({
    el: "#background",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 0.8,
    scaleMobile: 1.0,
    color: 0xa9d6b4,
    backgroundColor: 0xe8f2ea,
    spacing: 10,
    chaos: 1.5
});



// IMAGE ROTATION
const card = document.querySelector(".card__inner");

window.addEventListener("scroll", function () {
    // Get the scroll position
    const scrollPosition = window.scrollY;

    // Calculate rotation angle (adjust the factor as needed)
    const rotationAngle = scrollPosition * 0.1;

    // Apply the rotation transform
    card.style.transform = `rotateX(${rotationAngle}deg)`;
});


// 
// GSAP
// 

window.onload = function () {

    var timeline = new TimelineMax();
    timeline.from("#heroImg", 2, {
        duration: 1.5,
        ease: "power4.inOut",
        y: 500
    }, 0)
    timeline.from("#title,#title1", 1, { scale: 0.5 }, 0)
    timeline.from("#heroText", 5, { opacity: 0 }, 0)


}



