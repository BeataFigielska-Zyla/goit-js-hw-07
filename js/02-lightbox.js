import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(".gallery");

const galleryPictures = galleryItems.map((item) => {
  const li = document.createElement("li");
  const link = document.createElement("a");
  const picture = document.createElement("img");

  li.classList.add("gallery__item");
  link.classList.add("gallery__link");
  picture.classList.add("gallery__image");

  link.href = item.original;
  picture.src = item.preview;
  picture.dataset.source = item.original;
  picture.alt = item.description;

  link.appendChild(picture);
  li.appendChild(link);
  return li;
});

gallery.append(...galleryPictures);


// galleryItems.forEach((item) => {
//   const { original, preview, description } = item;

// const li = document.createElement("li");
//   li.classList.add("gallery__item");

//   const link = document.createElement("a");
//   link.classList.add("gallery__link");
//   link.href = original;

//   const picture = document.createElement("img");
//   picture.classList.add("gallery__image");
//   picture.src = preview;
//   picture.dataset.source = original;
//   picture.alt = description;

//   link.appendChild(picture);
//   li.appendChild(link);
//   gallery.appendChild(li);
// });



const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250, 
  
  });

