// Add imports above this line
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryDiv = document.querySelector('.gallery');

galleryDiv.innerHTML = galleryItems
  .map(
    item =>
      `
      <a class="gallery__item"
       href="${item.original}">
        <img class="gallery__image"
         src="${item.preview}" 
          alt="${item.description}" />
      </a>
    
    `
  )
  .join('');

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
