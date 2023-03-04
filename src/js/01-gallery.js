// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            loading="lazy"
          />
        </a>
      </div>
      `;
    })
    .join('');
}

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
console.log(galleryItems);
