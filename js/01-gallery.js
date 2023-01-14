import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");
// const imgLink = document.querySelector("gallery__link");
// container.addEventListener("click", onImgClick);
const makeGalleryItem = function (galleryItem) {
  return galleryItem.map(({ preview, original }) => {
    return `
    
    <div class="gallery__item">
      <a class="gallery__link" href="${preview}">
      <img
      class="gallery__image"
      src="${original}"
      data-source="large-image.jpg"
      alt="Image description"
        />
        </a>
        </div>
        
        `;
  });
};
const gallery = makeGalleryItem(galleryItems).join("");
container.insertAdjacentHTML("beforeend", gallery);
// function onImgClick(e) {
//   e.preventDefault();
//   // if (e.target.nodeName !== "IMG") {
//   //   return;
//   // }
//   // console.log("you're good!");
// }

container.onclick = (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const showOriginalPhoto = basicLightbox.create(
    `
    <img src="${e.target.src}">
    `,
    {
      onShow: (showOriginalPhoto) => {
        console.log("sdvsdv");
      },
    }
  );
  showOriginalPhoto.show();

  window.addEventListener("keydown", onEcsPress);

  function onEcsPress(e) {
    if (e.code === "Escape") {
      console.log("press esc btn");
      showOriginalPhoto.close();
      // console.log(viewBigPhoto.visible);
    }
  }
};

// function onEcsPress(e) {
//   if (e.code === "Escape") {
//     console.log(e.target);
//   }
// }
