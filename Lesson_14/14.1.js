const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const dots = document.querySelector('.dots');

let currentSlide = 0;

function showSlides(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });

    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    prev.style.display = index === 0 ? 'none' : 'block';
    next.style.display = index === slides.length - 1 ? 'none' : 'block';

    currentSlide = index;
}


function nextSlide() {
    if (currentSlide < slides.length - 1) {
        showSlides(currentSlide + 1);
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        showSlides(currentSlide - 1);
    }
}

function createDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => showSlides(index));
        dots.appendChild(dot);
    });
}

createDots();
showSlides(currentSlide);