import { galleryItems } from './gallery-items.js';
// Change code below this line




const gallery = document.querySelector(".gallery");


galleryItems.forEach((item) => {
  const { original, preview, description } = item;

const li = document.createElement("li");
  li.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = preview;
  image.dataset.source = original;
  image.alt = description;

  link.appendChild(image);
  li.appendChild(link);
  gallery.appendChild(li);
});



const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250, 
  
  });

