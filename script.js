


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
    timeline.from("#imgCarouselText", 1, { scale: 0.5 }, 0)
    timeline.from("#heroText", 5, { opacity: 0 }, 0)


}

// 
// Img Carousel
// 
document.addEventListener("DOMContentLoaded", () => {
	const marquee = document.querySelector(".marquee-inner");
	const speed = 1; // Scrolling Speed
	let scrollAmount = 0;
	let isHovered = false;

	// Duplicates the content
	const marqueeContent = marquee.innerHTML;
	marquee.innerHTML += marqueeContent;

	const startScrolling = () => {
		if (!isHovered) {
			scrollAmount -= speed;
			if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
				scrollAmount = 0;
			}
			marquee.style.transform = `translateX(${scrollAmount}px)`;
		}
		requestAnimationFrame(startScrolling);
	};

	marquee.addEventListener("mouseover", () => {
		isHovered = true;
	});

	marquee.addEventListener("mouseout", () => {
		isHovered = false;
	});

	startScrolling();
});
