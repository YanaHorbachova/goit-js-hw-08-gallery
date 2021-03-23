import images from "./gallery-items.js";
const ulRef = document.querySelector(".js-gallery");

function createList() {
  const liToAdd = [];
  images.forEach((image) => {
    const liRef = document.createElement("li");
    liRef.classList.add("gallery__item");
    const linkRef = document.createElement("a");
    linkRef.classList.add("gallery__link");
    linkRef.setAttribute("href", image.original);
    liRef.appendChild(linkRef);
    const imgRef = document.createElement("img");
    imgRef.classList.add("gallery__image");
    imgRef.setAttribute("src", image.preview);
    imgRef.setAttribute("data-source", image.original);
    imgRef.setAttribute("alt", image.description);
    linkRef.appendChild(imgRef);
    liToAdd.push(liRef);
  });
  ulRef.append(...liToAdd);
}
createList();

