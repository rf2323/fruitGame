let table = document.querySelector(".game");
let imagesArray = [
  "./Images/apple.webp",
  "./Images/avokado.webp",
  "./Images/orange.webp",
  "./Images/arbuz.jpg",
  "./Images/dexc.jpg",
  "./Images/banan.avif",
  "./Images/strawbery.avif",
  "./Images/vishnya.avif",
  "./Images/apple.webp",
  "./Images/avokado.webp",
  "./Images/orange.webp",
  "./Images/arbuz.jpg",
  "./Images/dexc.jpg",
  "./Images/banan.avif",
  "./Images/strawbery.avif",
  "./Images/vishnya.avif",
];
function printGame() {
  for (let i = 0; i < 4; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < 4; j++) {
      let td = document.createElement("td");
      td.setAttribute('class', "block");
      tr.append(td);
    }
    table.append(tr);
  }
}
printGame();
let allTdItems = document.querySelectorAll("td");
imagesArray.sort(() => Math.random() - 0.5);
function addImages() {
  allTdItems.forEach((td, index) => {
    td.innerHTML = `<img src="${imagesArray[index]}" alt="fruit" class='close' >`;
  });
}
addImages();
function openImage() {
  allTdItems.forEach((td) => {
    td.addEventListener("click", function () {
      if (td.classList.contains("open")) return;
      td.classList.add("open");
      td.childNodes[0].style.display = "block";
      openedImages.push(td);
      if (openedImages.length === 2) {
        checkImage();
      }
    });
  });
}
openImage();

let openedImages = [];


function checkImage() {
  let [firstImage,lastImage] = openedImages;
  if(firstImage.childNodes[0].src == lastImage.childNodes[0].src) {
    firstImage.style.backgroundColor = `aqua`;
    lastImage.style.backgroundColor = `aqua`;
  }
  else{
    setTimeout(() => {
      firstImage.childNodes[0].style.display = `none`
      lastImage.childNodes[0].style.display = `none`
      firstImage.classList.remove('open');
      lastImage.classList.remove('open');
    },2000)
  }

  openedImages = [];
}

const btn = document.querySelector('button');

btn.onclick = function () {
  location.reload()
}