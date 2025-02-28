// Gallery Image Change on Click (Example for property pages)
const galleryImages = document.querySelectorAll('.property-gallery img');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        const mainImage = document.querySelector('.property-gallery img.main');
        mainImage.classList.remove('main');
        img.classList.add('main');
    });
});
