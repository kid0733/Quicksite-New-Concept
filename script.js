//Scrolling
// script.js

document.addEventListener('DOMContentLoaded', function () {
    const lenis = new Lenis({
        duration: 1.2, // Set the duration of the scroll (in seconds)
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
        direction: 'vertical', // Scroll direction: 'vertical' or 'horizontal'
        smooth: true // Enable or disable smooth scrolling
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
});



// NAV TOGGLE
// Function to toggle navigation items visibility when the nav button is clicked
function toggleNav() {
    const navItems = document.querySelector('.nav-items'); // Selects the navigation items container
    navItems.classList.toggle('show'); // Toggles the 'show' class to display or hide the navigation items
}

// VANTA BG
// Initializes Vanta.js TRUNK background animation
// VANTA.TRUNK({
//     el: "#background", // Element to apply the background animation to
//     mouseControls: false, // Disables mouse control interaction
//     touchControls: false, // Disables touch control interaction
//     gyroControls: false, // Disables gyroscope control interaction
//     minHeight: 500.0, // Minimum height of the element
//     minWidth: 200.0, // Minimum width of the element
//     scale: 5, // Scale of the animation
//     scaleMobile: 1.0, // Scale of the animation on mobile devices
//     color: 0xa9d6b4, // Color of the animation
//     backgroundColor: 0xe8f2ea, // Background color of the element
//     spacing: 20, // Spacing of the animation elements
//     chaos: 1 // Chaos level of the animation
// });

// GSAP Animations
// Initializes GSAP animations when the window loads
window.onload = function () {
    gsap.registerPlugin(ScrollTrigger); // Registers the ScrollTrigger plugin

    var timeline = gsap.timeline(); // Creates a new GSAP timeline

    // Hero Image Visibility Animation
    timeline.from("#heroImg", {
        duration: 1.5, // Animation duration in seconds
        ease: "power4.inOut", // Easing function
        y: 500 // Initial vertical position of the element
    })
        .from("#title,#title1", { scale: 0.5, duration: 1 }, 0) // Title animation with initial scale and duration
        .from("#heroText", { opacity: 0, duration: 5 }, 0); // Hero text animation with initial opacity and duration

    // Constant rotation for the background [TRUNKS ANIMATION REPLACEMENT]
    gsap.to("#background", {
        rotation: 360, // Rotate 360 degrees
        duration: 15, // Duration of the rotation (in seconds)
        ease: "none", // No easing for a constant speed
        repeat: -1, // Infinite repetition
        transformOrigin: "center center", // Rotation around the center

    });
    gsap.to("#background", {
        scale: 1.25, // Zoom to 1.5 times the original size

    });
    // Image Rotation Animation
    gsap.to(".card__inner", {
        rotateX: 35, // Rotation angle
        scrollTrigger: {
            trigger: ".card", // Element that triggers the animation
            start: "top 85%", // Animation start point
            end: "bottom 20%", // Animation end point
            scrub: 0.001, // Smoothness of the animation
        }
    });

    // ScrollTrigger Animation for #imgCarouselText
    gsap.from("#imgCarouselText", {
        scale: 0.5, // Initial scale
        ease: "power1.inOut", // Easing function
        scrollTrigger: {
            trigger: "#imgCarouselText", // Element that triggers the animation
            start: "top 80%", // Animation start point
            end: "bottom 20%", // Animation end point
            toggleActions: "play none none none" // Actions to take at different stages
        },
        duration: 1 // Animation duration in seconds
    });

    // Features Carousel Animation
    gsap.from("#featuresCarouselTitle", {
        scale: 0.5, // Initial scale
        ease: "power1.inOut", // Easing function
        scrollTrigger: {
            trigger: "#featuresCarouselTitle", // Element that triggers the animation
            start: "top 80%", // Animation start point
            end: "bottom 20%", // Animation end point
            toggleActions: "play none none none" // Actions to take at different stages
        },
        duration: 1 // Animation duration in seconds
    });

    gsap.from("#featuresCarouselText", {
        opacity: 0, // Initial opacity
        y: 100, // Initial vertical position
        scale: 0.5, // Initial scale
        delay: 0.5, // Delay before the animation starts
        ease: "power1.inOut", // Easing function
        scrollTrigger: {
            trigger: "#featuresCarouselTitle", // Element that triggers the animation
            start: "top 80%", // Animation start point
            end: "bottom 20%", // Animation end point
            toggleActions: "play none none none" // Actions to take at different stages
        },
        duration: 1 // Animation duration in seconds
    });

    gsap.from("#features_intro_slider_container", {
        opacity: 0, // Initial opacity
        y: 100, // Initial vertical position
        scale: 0.5, // Initial scale
        ease: "power1.inOut", // Easing function
        delay: 1, // Delay before the animation starts
        scrollTrigger: {
            trigger: "#featuresCarouselTitle", // Element that triggers the animation
            start: "top 80%", // Animation start point
            end: "bottom 20%", // Animation end point
            toggleActions: "play none none none" // Actions to take at different stages
        },
        duration: 1 // Animation duration in seconds
    });

    // Mobile Carousel Animation
    gsap.from("#mobileCarouselTitle", {
        opacity: 0, // Initial opacity
        scale: 0.5, // Initial scale
        ease: "power1.inOut", // Easing function
        scrollTrigger: {
            trigger: "#mobileCarouselTitle", // Element that triggers the animation
            start: "top 80%", // Animation start point
            end: "bottom 20%", // Animation end point
            toggleActions: "play none none none" // Actions to take at different stages
        },
        duration: 1 // Animation duration in seconds
    });

    gsap.from("#mobileCarouselText", {
        opacity: 0, // Initial opacity
        scale: 0.5, // Initial scale
        ease: "power1.inOut", // Easing function
        delay: 0.5, // Delay before the animation starts
        scrollTrigger: {
            trigger: "#mobileCarouselTitle", // Element that triggers the animation
            start: "top 80%", // Animation start point
            end: "bottom 20%", // Animation end point
            toggleActions: "play none none none" // Actions to take at different stages
        },
        duration: 1 // Animation duration in seconds
    });

    // Navigation Background Color Change on Scroll
    ScrollTrigger.create({
        start: "top top", // Trigger point at the top of the page
        onUpdate: (self) => {
            if (self.scroll() > 500) { // If scrolled more than 500 pixels
                gsap.to(".nav-container", {
                    backgroundColor: "#033810", // New background color
                    duration: 0.3, // Animation duration
                    opacity: 0.95, // Opacity of the navigation
                    blur: 20 // Blur effect
                });
            } else {
                gsap.to(".nav-container", {
                    backgroundColor: "rgba(4, 71, 80, 0.2)", // Original background color
                    duration: 0.3, // Animation duration
                });
            }
        }
    });
};

// Template Image Carousel
document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.querySelector('.carousel__container'); // Carousel container element
    const slides = document.querySelectorAll('.carousel__slide'); // All carousel slides
    const prevButton = document.querySelector('.carousel__button--prev'); // Previous button element
    const nextButton = document.querySelector('.carousel__button--next'); // Next button element

    let currentIndex = 0; // Current index of the carousel
    const autoScrollInterval = 3000; // Interval for auto-scrolling in milliseconds
    let autoScroll; // Variable to store auto-scroll interval

    // Function to update the opacity of slides
    const updateSlidesOpacity = () => {
        slides.forEach((slide, index) => {
            slide.classList.remove('carousel__slide--active'); // Remove active class from all slides
            if (index === currentIndex) {
                slide.classList.add('carousel__slide--active'); // Add active class to the current slide
            }
        });
    };

    // Function to go to a specific slide
    const goToSlide = index => {
        currentIndex = index; // Set the current index
        const offset = -currentIndex * 100; // Calculate the offset for translation
        carouselContainer.style.transform = `translateX(${offset}%)`; // Apply the translation
        updateSlidesOpacity(); // Update the slides opacity
    };

    // Function to start auto-scrolling
    const startAutoScroll = () => {
        autoScroll = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length; // Increment the index and loop back if necessary
            goToSlide(currentIndex); // Go to the next slide
        }, autoScrollInterval); // Interval for auto-scrolling
    };

    // Function to stop auto-scrolling
    const stopAutoScroll = () => {
        clearInterval(autoScroll); // Clear the auto-scroll interval
    };

    // Event listener for the previous button
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Decrement the index and loop back if necessary
        goToSlide(currentIndex); // Go to the previous slide
        stopAutoScroll(); // Stop auto-scrolling
        startAutoScroll();
        // Restart auto-scrolling
    });
    // Event listener for the next button
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length; // Increment the index and loop back if necessary
        goToSlide(currentIndex); // Go to the next slide
        stopAutoScroll(); // Stop auto-scrolling
        startAutoScroll(); // Restart auto-scrolling
    });

    // Event listener to stop auto-scrolling on mouseover
    carouselContainer.addEventListener('mouseover', stopAutoScroll);

    // Event listener to start auto-scrolling on mouseout
    carouselContainer.addEventListener('mouseout', startAutoScroll);

    updateSlidesOpacity(); // Initial update of slides opacity
    startAutoScroll(); // Start auto-scrolling
});
// Mobile View Carousel
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".mobile-carousel-inner"); // Mobile carousel container
    const speed = 1; // Scrolling speed
    let scrollAmount = 0; // Initial scroll amount
    let isHovered = false; // Flag to check if the carousel is hovered

    const carouselContent = carousel.innerHTML; // Get the current content of the carousel
    carousel.innerHTML += carouselContent; // Duplicate the content for infinite scrolling

    // Function to start scrolling
    const startScrolling = () => {
        if (!isHovered) { // Check if the carousel is not hovered
            scrollAmount -= speed; // Decrement the scroll amount
            if (Math.abs(scrollAmount) >= carousel.scrollWidth / 2) { // Check if the scroll amount exceeds half the scroll width
                scrollAmount = 0; // Reset the scroll amount
            }
            carousel.style.transform = `translateX(${scrollAmount}px)`; // Apply the translation
        }
        requestAnimationFrame(startScrolling); // Request the next animation frame
    };

    // Event listener to set isHovered to true on mouseover
    carousel.addEventListener("mouseover", () => {
        isHovered = true;
    });

    // Event listener to set isHovered to false on mouseout
    carousel.addEventListener("mouseout", () => {
        isHovered = false;
    });

    startScrolling(); // Start the scrolling
});

// Features Intro Slider
document.addEventListener('DOMContentLoaded', () => {
    const featuresIntroSliderInner = document.querySelector('.features-intro-slider-inner'); // Features intro slider container
    const items = document.querySelectorAll('.features-intro-slider-item'); // All slider items
    const prevButton = document.getElementById('features_intro_prev'); // Previous button element
    const nextButton = document.getElementById('features_intro_next'); // Next button element
    let currentIndex = 0; // Current index of the slider

    // Function to update the slider position
    const updateFeaturesIntroSlider = () => {
        const itemWidth = items[0].clientWidth; // Get the width of a single item
        const offset = -currentIndex * itemWidth; // Calculate the offset for translation
        featuresIntroSliderInner.style.transform = `translateX(${offset}px)`; // Apply the translation
    };

    // Event listener for the previous button
    prevButton.addEventListener('click', () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1; // Decrement the index and loop back if necessary
        updateFeaturesIntroSlider(); // Update the slider position
    });

    // Event listener for the next button
    nextButton.addEventListener('click', () => {
        currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0; // Increment the index and loop back if necessary
        updateFeaturesIntroSlider(); // Update the slider position
    });

    // Event listener to update the slider position on window resize
    window.addEventListener('resize', updateFeaturesIntroSlider);
    updateFeaturesIntroSlider(); // Initial update of the slider position
});