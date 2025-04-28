const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel3d = document.querySelector('.carousel-3d');
const images = carousel3d.querySelectorAll('img');

let currentIndex = 0;
const total = images.length;

function updateCarousel() {
    images.forEach((img, i) => {
        img.style.transition = 'transform 0.5s, filter 0.5s, opacity 0.5s';
        
        const diff = (i - currentIndex + total) % total;

        if (diff === 0) {
            // Imagen del centro
            img.style.transform = `translateX(0) scale(1)`;
            img.style.filter = 'blur(0)';
            img.style.zIndex = '3';
            img.style.opacity = '1';
        } else if (diff === 1) {
            // Inmediata derecha
            img.style.transform = `translateX(85%) scale(0.8)`;
            img.style.filter = 'blur(0)';
            img.style.zIndex = '2';
            img.style.opacity = '1';
        } else if (diff === total - 1) {
            // Inmediata izquierda
            img.style.transform = `translateX(-85%) scale(0.8)`;
            img.style.filter = 'blur(0)';
            img.style.zIndex = '2';
            img.style.opacity = '1';
        } else if (diff === 2) {
            // Lejana derecha
            img.style.transform = `translateX(150%) scale(0.6)`;
            img.style.filter = 'blur(2px)';
            img.style.zIndex = '1';
            img.style.opacity = '0.7';
        } else if (diff === total - 2) {
            // Lejana izquierda
            img.style.transform = `translateX(-150%) scale(0.6)`;
            img.style.filter = 'blur(2px)';
            img.style.zIndex = '1';
            img.style.opacity = '0.7';
        } else {
            // Imágenes muy lejanas (las escondemos)
            img.style.transform = `translateX(0) scale(0)`;
            img.style.opacity = '0';
        }
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + total) % total;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % total;
    updateCarousel();
});

// Inicializar
updateCarousel();
