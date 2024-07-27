//NAV TOGGLE
function toggleNav() {
    const navItems = document.querySelector('.nav-items');
    navItems.classList.toggle('show');
}
//VANTA BG

VANTA.TRUNK({
    el: "#background",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 500.0,
    minWidth: 200.0,
    scale: 5,
    scaleMobile: 1.0,
    color: 0xa9d6b4,
    backgroundColor: 0xe8f2ea,
    spacing: 20,
    chaos: 5
});




// // IMAGE ROTATION
// const card = document.querySelector(".card__inner");

// window.addEventListener("scroll", function () {
//     // Get the scroll position
//     const scrollPosition = window.scrollY*1.25;

//     // Calculate rotation angle (adjust the factor as needed)
//     const rotationAngle = scrollPosition * 0.08;

//     // Apply the rotation transform
//     card.style.transform = `rotateX(${rotationAngle}deg)`;
// });


// 
// GSAP Animations 
// 

window.onload = function () {
    gsap.registerPlugin(ScrollTrigger);

    var timeline = gsap.timeline();
    // Hero Image
    timeline.from("#heroImg", {
        duration: 1.5,
        ease: "power4.inOut",
        y: 500
    })
        // Hero Title
        .from("#title,#title1", { scale: 0.5, duration: 1 }, 0)
        .from("#heroText", { opacity: 0, duration: 5 }, 0);


    // image rotation
    gsap.to(".card__inner", {
        rotateX: 35,//change for sensitivity of rotation


        scrollTrigger: {
            trigger: ".card",
            start: "top 55%",
            end: "bottom 100%",
            scrub: 1,


        }
    })
    // Adding ScrollTrigger for #imgCarouselText
    gsap.from("#imgCarouselText", {

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
    // Features Carousel
    gsap.from("#featuresCarouselTitle", {

        scale: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: "#featuresCarouselTitle",
            start: "top 80%", // when the top of the element is 80% from the top of the viewport
            end: "bottom 20%", // when the bottom of the element is 20% from the top of the viewport
            toggleActions: "play none none none"
        },
        duration: 1
    });
    // Features Carousel Text
    gsap.from("#featuresCarouselText", {
        opacity: 0,
        y: 100,
        scale: 0.5,
        delay: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: "#featuresCarouselTitle",
            start: "top 80%", // when the top of the element is 80% from the top of the viewport
            end: "bottom 20%", // when the bottom of the element is 20% from the top of the viewport
            toggleActions: "play none none none"
        },
        duration: 1
    });
    // Features Carousel
    gsap.from("#features_intro_slider_container", {
        opacity: 0,
        y: 100,
        scale: 0.5,
        ease: "power1.inOut",
        delay: 1,
        scrollTrigger: {
            trigger: "#featuresCarouselTitle",
            start: "top 80%", // when the top of the element is 80% from the top of the viewport
            end: "bottom 20%", // when the bottom of the element is 20% from the top of the viewport
            toggleActions: "play none none none"
        },
        duration: 1
    });
    //Mobile Carousel
    gsap.from("#mobileCarouselTitle", {
        opacity: 0,
        scale: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: "#mobileCarouselTitle",
            start: "top 80%", // when the top of the element is 80% from the top of the viewport
            end: "bottom 20%", // when the bottom of the element is 20% from the top of the viewport
            toggleActions: "play none none none"
        },
        duration: 1
    });
    gsap.from("#mobileCarouselText", {
        opacity: 0,
        scale: 0.5,
        ease: "power1.inOut",
        delay: 0.5,
        scrollTrigger: {
            trigger: "#mobileCarouselTitle",
            start: "top 80%", // when the top of the element is 80% from the top of the viewport
            end: "bottom 20%", // when the bottom of the element is 20% from the top of the viewport
            toggleActions: "play none none none"
        },
        duration: 1
    });

    ScrollTrigger.create({
        start: "top top",
        onUpdate: (self) => {
            if (self.scroll() > 500) {
                gsap.to(".nav-container", {
                    backgroundColor: "#033810",
                    duration: 0.3,
                    opacity: 0.95,
                    blur: 20
                });
            } else {
                gsap.to(".nav-container", {
                    backgroundColor: "rgba(4, 71, 80, 0.2)",
                    duration: 0.3,
                });
            }
        }
    });
}


// 
// Template Image Carousel
// 
const embla = EmblaCarousel(document.querySelector('.embla'), {
    loop: true,
    align: 'start',
    skipSnaps: true,
})




//Mobile View Carousel

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".mobile-carousel-inner");
    const speed = 1; // Scrolling Speed
    let scrollAmount = 0;
    let isHovered = false;

    // Duplicates the content
    const carouselContent = carousel.innerHTML;
    carousel.innerHTML += carouselContent;

    const startScrolling = () => {
        if (!isHovered) {
            scrollAmount -= speed;
            if (Math.abs(scrollAmount) >= carousel.scrollWidth / 2) {
                scrollAmount = 0;
            }
            carousel.style.transform = `translateX(${scrollAmount}px)`;
        }
        requestAnimationFrame(startScrolling);
    };

    carousel.addEventListener("mouseover", () => {
        isHovered = true;
    });

    carousel.addEventListener("mouseout", () => {
        isHovered = false;
    });

    startScrolling();
});



// Features Intro Slider
document.addEventListener('DOMContentLoaded', () => {
    const featuresIntroSliderInner = document.querySelector('.features-intro-slider-inner');
    const items = document.querySelectorAll('.features-intro-slider-item');
    const prevButton = document.getElementById('features_intro_prev');
    const nextButton = document.getElementById('features_intro_next');
    let currentIndex = 0;

    const updateFeaturesIntroSlider = () => {
        const itemWidth = items[0].clientWidth;
        const offset = -currentIndex * itemWidth;
        featuresIntroSliderInner.style.transform = `translateX(${offset}px)`;
    };

    prevButton.addEventListener('click', () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        updateFeaturesIntroSlider();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        updateFeaturesIntroSlider();
    });

    window.addEventListener('resize', updateFeaturesIntroSlider);
    updateFeaturesIntroSlider();
});



