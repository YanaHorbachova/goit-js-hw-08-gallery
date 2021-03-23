import images from "./gallery-items.js";
const ulRef = document.querySelector(".js-gallery");
const modalRef = document.querySelector(".js-lightbox");
const buttonRef = document.querySelector(
  'button[data-action="close-lightbox"]'
);
const modalImgRef = document.querySelector(".lightbox__image");
const overlayRef = document.querySelector(".lightbox__overlay");

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

ulRef.addEventListener("click", openModal);
buttonRef.addEventListener("click", closeModal);


function openModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
      return;
    }
    modalImgRef.setAttribute("src", event.target.dataset.source);
    modalImgRef.setAttribute("alt", event.target.alt);
  
    modalRef.classList.add("is-open");
  }

  function closeModal() {
    modalImgRef.setAttribute("src", "");
    modalImgRef.setAttribute("alt", "");
    modalRef.classList.remove("is-open");
  }