/* VARIABILI */
//img array

picsArray = [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp",
];

const picsElement = document.querySelector(".pics");

let activeImage = 0  //img in pos 0

//console.log(picsArray,activeImage, picsElement);

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

//console.log(prevBtn, nextBtn);



/* FOR */

//aggiungere le immagini in modo dinamico col template literal

//ciclando tra le immagini, il percorso delle img che ho scritto va inserito nel tag immagine che andrò a creare in modo dinamico

for (let i = 0; i < picsArray.length; i++) {
    const currentImage = picsArray[i];
    //console.log(currentImage);

    const currentImageMarkup = `<img src="./assets/img/${currentImage}" alt="" class="${activeImage === i ? "active" : ""}">`
    //console.log(currentImageMarkup);

    picsElement.innerHTML += currentImageMarkup;
    
}


/* BUTTONS */
//buttons addEventListener

nextBtn.addEventListener("click", function(){
    //console.log("next");

    activeImage++;

    const currentActiveImage = document.querySelector("img.active")
    currentActiveImage.classList.remove("active") //toglie active dall'immagine che si vede

    const pics = document.querySelectorAll("img")
    //console.log(pics);
    //console.log(pics[activeImage]);

    pics[activeImage].classList.add("active") //aggiunge active all'immagine successiva che deve apparire (activeImage) che vado a pescare da dentro pics
})

