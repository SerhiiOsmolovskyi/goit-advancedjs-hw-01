import SimpleLightbox from 'simplelightbox';

import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function createMarkup(arr) {
  return arr
    .map(({ preview, original, description }) =>
      `<li class="gallery__item js-item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
      </li>`
    )
    .join('');
}

gallery.innerHTML = createMarkup(galleryItems);

// Створіть новий екземпляр SimpleLightbox для галереї
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250
});

// gallery.addEventListener('click', handlerClick);

// function handlerClick(event) {
//   event.preventDefault();
//   if (event.currentTarget === event.target) {
//     return;
//   }
//   const currentImage = event.target.closest('.js-item');

//   if (currentImage) {
//     const currentImageSrc = currentImage.querySelector('img').getAttribute('data-source');
//     const currentImageAlt = currentImage.querySelector('img').getAttribute('alt');

//     const instance = lightbox.open({
//       source: currentImageSrc,
//       alt: currentImageAlt,
//     });

//     document.addEventListener('keydown', (e) => {
//       if (e.key === 'Escape') {
//         instance.close();
//       }
//     });
//   }
// }