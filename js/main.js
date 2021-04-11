import images from "./gallery-items.js";
const ulRef = document.querySelector(".js-gallery");
const modalRef = document.querySelector(".js-lightbox");
const buttonRef = document.querySelector(
  'button[data-action="close-lightbox"]'
);
const modalImgRef = document.querySelector(".lightbox__image");

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
   
    updateAttribute(event.target.alt, event.target.dataset.source);
    modalRef.classList.add("is-open");
  }

  function closeModal() {
    updateAttribute("", "");
    modalRef.classList.remove("is-open");
  }

  function updateAttribute(alt, src) {
    modalImgRef.setAttribute("src", src);
    modalImgRef.setAttribute("alt", alt);
    }
    
    // Дополнительно

    // function modalKeydown(event) {
    //   if (event.code === "Escape") {
    //     closeModal();
    //   }
    //   if (event.code === "ArrowRight") {
    //     changeImgByRightArrow(currentIndex);
    //   }
    
    //   if (event.code === "ArrowLeft") {
    //     changeImgByLeftArrow(currentIndex);
    //   }
    // }
    
    // function changeImgByRightArrow(index) {
    //   if (index < images.length - 1) {
    //     modalImgRef.src = images[index + 1].original;
    //     modalImgRef.alt = images[index + 1].description;
    //     currentIndex += 1;
    //   }
    // }
    
    // function changeImgByLeftArrow(index) {
    //   if (index > 0) {
    //     modalImgRef.src = images[index - 1].original;
    //     modalImgRef.alt = images[index - 1].description;
    //     currentIndex -= 1;
    //   }
    // }
    