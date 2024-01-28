import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallery = document.querySelector(".gallery");

galleryItems.forEach((image) => {
  const { preview, original, description } = image;

  const li = document.createElement("li");
  li.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = original;

  const picture = document.createElement("img");
  picture.classList.add("gallery__image");
  picture.src = preview;
  picture.dataset.source = original;
  picture.alt = description;

  link.appendChild(picture);
  li.appendChild(link);
  gallery.appendChild(li);


  link.addEventListener("click", (event) => {
  
    event.preventDefault();
      
const { source, description } = event.currentTarget.querySelector("img").dataset;

   const instance = basicLightbox.create(`<img src="${source}" alt="${description}">`,
    {onShow: (instance) => {
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape") {
            instance.close();
          }
        });
      },
    }
  );

  instance.show();
  });
    
});
  





