import { galleryItems } from "./gallery-items.js";

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

let lightboxInstance;

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  
  if (event.target.nodeName === "IMG") {
    lightboxInstance = basicLightbox.create(
      `
      <img src="${event.target.dataset.source}" alt="${event.target.alt}">
    `,
      {
        onShow: (instance) => {
          document.addEventListener("keydown", onEscape);
        },
        onClose: (instance) => {
          document.removeEventListener("keydown", onEscape);
        },
      }
    );
    lightboxInstance.show();
  }
});

function onEscape(event) {
  if (event.key === "Escape" && lightboxInstance) {
    lightboxInstance.close();
  }
}




// const gallery = document.querySelector(".gallery");

// galleryItems.forEach((image) => {
//   const { preview, original, description } = image;

//   const li = document.createElement("li");
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


//   link.addEventListener("click", (event) => {
  
//     event.preventDefault();
      
// const { source, description } = event.currentTarget.querySelector("img").dataset;

//    const instance = basicLightbox.create(`<img src="${source}" alt="${description}">`,
//     {onShow: (instance) => {
//         document.addEventListener("keydown", (e) => {
//           if (e.key === "Escape") {
//             instance.close();
//           }
//         });
//       },
//     }
//   );

//   instance.show();
//   });
    
// });
  





