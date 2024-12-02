let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(nextSlide, 3000);

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;

    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.style.transform = `translateX(${index * 30}px)`;
        });
    }

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        // Move the first indicator to the last position
        const firstTransform = indicators[0].style.transform;
        for (let i = 0; i < indicators.length - 1; i++) {
            indicators[i].style.transform = indicators[i + 1].style.transform;
        }
        indicators[indicators.length - 1].style.transform = firstTransform;

        // Update active slide but not the active indicator class
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Initialize positions
    updateIndicators();
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});
