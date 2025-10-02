// Hero Slider
let currentSlide = 0;
let slideInterval;
let isHovering = false;

const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');
const heroSection = document.querySelector('.hero');

// Slide değiştirme fonksiyonu
function changeSlide(index) {
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

// Otomatik geçiş
function startSlideShow() {
    slideInterval = setInterval(() => {
        if (!isHovering) {
            let nextSlide = (currentSlide + 1) % slides.length;
            changeSlide(nextSlide);
        }
    }, 2500);
}

// Mouse hero üzerinde
heroSection.addEventListener('mouseenter', () => {
    isHovering = true;
});

// Mouse hero'dan çıktı
heroSection.addEventListener('mouseleave', () => {
    isHovering = false;
});

// Manuel geçiş için indicator'lar
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        changeSlide(index);
    });
});

// Sayfa yüklendiğinde başlat
startSlideShow();

// Smooth scroll for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 90;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Hero button smooth scroll
document.querySelector('.hero-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
        const headerOffset = 90;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
});