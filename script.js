


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
    gsap.registerPlugin(ScrollTrigger);

    var timeline = gsap.timeline();
    timeline.from("#heroImg", {
        duration: 1.5,
        ease: "power4.inOut",
        y: 500
    })
        .from("#title,#title1", { scale: 0.5, duration: 1 }, 0)
        .from("#heroText", { opacity: 0, duration: 5 }, 0);

    // Adding ScrollTrigger for #imgCarouselText
    gsap.from("#imgCarouselText,#imgCarousel", {

        scale: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: "#imgCarouselText",
            start: "top 80%", // when the top of the element is 80% from the top of the viewport
            end: "bottom 20%", // when the bottom of the element is 20% from the top of the viewport
            toggleActions: "play none none none"
        },
        duration: 1
    });
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



// Features
document.addEventListener('DOMContentLoaded', () => {
    const teamSliderInner = document.querySelector('.team-slider-inner');
    const items = document.querySelectorAll('.team-slider-item');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    const updateTeamSlider = () => {
        const offset = -currentIndex * 100;
        teamSliderInner.style.transform = `translateX(${offset}%)`;
    };

    prevButton.addEventListener('click', () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        updateTeamSlider();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        updateTeamSlider();
    });
});

