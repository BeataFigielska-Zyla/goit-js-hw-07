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

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = preview;
  img.dataset.source = original;
  img.alt = description;

  link.appendChild(img);
  li.appendChild(link);
  gallery.appendChild(li);
});


document.addEventListener("DOMContentLoaded", () => {
  new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    
    
  });
});


