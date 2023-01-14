import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");
// const imgLink = document.querySelector("gallery__link");
// container.addEventListener("click", onImgClick);
const makeGalleryItem = function (galleryItem) {
  return galleryItem.map(({ preview, original, description }) => {
    return `
    
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        
        `;
  });
};
const galleryItemsMarkup = makeGalleryItem(galleryItems).join("");
container.insertAdjacentHTML("beforeend", galleryItemsMarkup);

container.onclick = (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  var lightbox = new SimpleLightbox(".gallery a");
  lightbox.on("shown.simplelightbox", function (e) {
    // e.target.style.width = "999px";
    document.querySelector(".sl-overlay").style.background = "red";
  });
  // const overlay = document.closest(".sl-overlay");
  // overlay.style.background = "#ccc";
  // overlay.target.style.opacity = "0.9";
  // const overlay = document.querySelector(".sl-overlay ");
  // console.log(overlay.dataset);
  lightbox.open;
};
