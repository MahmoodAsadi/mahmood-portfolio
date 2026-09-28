const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox?.querySelector('img');

document.querySelectorAll('.gallery-item').forEach((item) => {
  item.addEventListener('click', () => {
    lightboxImage.src = item.dataset.full;
    lightboxImage.alt = item.dataset.alt;
    lightbox.showModal();
  });
});

if (lightbox) {
  lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });
}
