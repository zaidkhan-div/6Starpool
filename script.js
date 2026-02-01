// Before/After Comparison Slider Functionality

document.addEventListener('DOMContentLoaded', function () {

    // Initialize all sliders
    const sliders = document.querySelectorAll('.comparison-range');

    sliders.forEach((slider, index) => {
        const container = slider.closest('.comparison-slider-container');
        const overlay = container.querySelector('.comparison-overlay');
        const divider = container.querySelector('.comparison-divider');

        // Update slider position
        function updateSlider(value) {
            const percentage = value + '%';
            overlay.style.width = percentage;
            divider.style.left = percentage;
        }

        // Handle slider input
        slider.addEventListener('input', function () {
            updateSlider(this.value);
        });

        // Handle mouse/touch dragging
        let isDragging = false;

        container.addEventListener('mousedown', function (e) {
            isDragging = true;
            updatePosition(e.clientX);
        });

        container.addEventListener('touchstart', function (e) {
            isDragging = true;
            updatePosition(e.touches[0].clientX);
        });

        document.addEventListener('mousemove', function (e) {
            if (isDragging) {
                updatePosition(e.clientX);
            }
        });

        document.addEventListener('touchmove', function (e) {
            if (isDragging) {
                updatePosition(e.touches[0].clientX);
            }
        });

        document.addEventListener('mouseup', function () {
            isDragging = false;
        });

        document.addEventListener('touchend', function () {
            isDragging = false;
        });

        function updatePosition(clientX) {
            const rect = container.getBoundingClientRect();
            const x = clientX - rect.left;
            const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
            slider.value = percentage;
            updateSlider(percentage);
        }
    });

    // Scroll to Top Button
    const scrollTopBtn = document.querySelector('.scroll-top-btn');

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Show/hide scroll button based on scroll position
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                scrollTopBtn.style.opacity = '1';
                scrollTopBtn.style.pointerEvents = 'auto';
            } else {
                scrollTopBtn.style.opacity = '0';
                scrollTopBtn.style.pointerEvents = 'none';
            }
        });

        // Initialize button visibility
        if (window.pageYOffset <= 300) {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.pointerEvents = 'none';
        }
    }
});

// JS for Testimonial

document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.testimonials-track');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    const dots = document.querySelectorAll('.testimonial-dot');

    let currentSlide = 0;
    const totalSlides = 4; // We show 3 cards at a time, so 6 cards = 4 slides

    function updateSlider() {
        const slideWidth = track.offsetWidth / 3;
        track.style.transform = `translateX(-${currentSlide * (slideWidth + 10)}px)`;

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    nextBtn.addEventListener('click', function () {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    });

    prevBtn.addEventListener('click', function () {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            currentSlide = index;
            updateSlider();
        });
    });
});



// Navbar Hamburger Menu

const hamburgerBtn = document.getElementById('hamburgerBtn');
const navCloseBtn = document.getElementById('navCloseBtn');
const navMenuWrapper = document.getElementById('navMenuWrapper');
const navOverlay = document.getElementById('navOverlay');

hamburgerBtn.addEventListener('click', function () {
    navMenuWrapper.classList.add('active');
    navOverlay.classList.add('active');
});

navCloseBtn.addEventListener('click', function () {
    navMenuWrapper.classList.remove('active');
    navOverlay.classList.remove('active');
});

navOverlay.addEventListener('click', function () {
    navMenuWrapper.classList.remove('active');
    navOverlay.classList.remove('active');
});


// Hero Animated Text
const animateTexts = document.querySelectorAll('.hero-animate-text');
let currentIndex = 0;

setInterval(function () {
    animateTexts[currentIndex].classList.remove('active');
    animateTexts[currentIndex].classList.add('exit');

    setTimeout(function () {
        animateTexts[currentIndex].classList.remove('exit');
        currentIndex = (currentIndex + 1) % animateTexts.length;
        animateTexts[currentIndex].classList.add('active');
    }, 600);
}, 3000);