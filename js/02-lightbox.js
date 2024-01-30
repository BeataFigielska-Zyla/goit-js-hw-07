import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(".gallery");

const galleryPictures = galleryItems.map((item) => {
  const listPictures = document.createElement("li");
  const link = document.createElement("a");
  const picture = document.createElement("img");

  listPictures.classList.add("gallery__item");
  link.classList.add("gallery__link");
  picture.classList.add("gallery__image");

  link.href = item.original;
  picture.src = item.preview;
  picture.dataset.source = item.original;
  picture.alt = item.description;

  link.appendChild(picture);
  listPictures.appendChild(link);
  return listPictures;
});

gallery.append(...galleryPictures);


const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250, 
  
  });

