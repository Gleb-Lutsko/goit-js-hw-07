import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) => 
`<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');
gallery.insertAdjacentHTML('beforeend', markup);
gallery.addEventListener('click', onClickImg);
function onClickImg(event) {
  event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);
    instance.show();
    const markupItem = document.querySelector('.gallery__item');
    markupItem.addEventListener('keyup', closeModalKey);
    function closeModalKey(event) {
        if (event.code === "Escape") {
          instance.close()
          markupItem.removeEventListener('keyup', closeModalKey);
        }
    }
}
console.log(galleryItems);
