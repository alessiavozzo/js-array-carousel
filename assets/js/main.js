/* VARIABILI */
//img array

const picsArray = [
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

//thumbnail laterale

let activeThumbnail = 0
const thumbnail = document.querySelector(".thumbnails")


/* FOR */

//aggiungere le immagini in modo dinamico col template literal

//ciclando tra le immagini, il percorso delle img che ho scritto va inserito nel tag immagine che andrò a creare in modo dinamico

for (let i = 0; i < picsArray.length; i++) {
    const currentImage = picsArray[i];
    //console.log(currentImage);
    const currentThumbnail = picsArray[i];
    //console.log(currentThumbnail);

    let classActive
    if(activeImage === i){
        classActive = "active"
    }
    else{
        classActive = ""
    }

    const currentImageMarkup = `<img src="./assets/img/${currentImage}" alt="" class="${classActive}">`
    //console.log(currentImageMarkup);
    //console.log(classActive);

    const currentThumbnailMarkup = `<img src="./assets/img/${currentThumbnail}" alt="" class="${activeThumbnail === i ? "layer-active" : ""}">`
    //console.log(currentThumbnailMarkup);

    picsElement.innerHTML += currentImageMarkup;

    thumbnail.innerHTML += currentThumbnailMarkup;

}


/* BUTTONS */
//buttons addEventListener

//next
nextBtn.addEventListener("click", function () {
    //console.log("next");
    
    activeImage++;

    activeThumbnail++;  
    
    //Non farlo rompere dopo l'ultimo elemento
   
    if(activeImage > picsArray.length - 1){
        activeImage = 0
    }

    if(activeThumbnail > picsArray.length - 1){
        activeThumbnail = 0
    }
    
    //img
    const currentActiveImage = document.querySelector("img.active")
    
    currentActiveImage.classList.remove("active") //toglie active dall'immagine che si vede
    
    const pics = document.querySelectorAll(".pics > img")
    //console.log(pics);
    //console.log(pics[activeImage]);
    
    pics[activeImage].classList.add("active") //aggiunge active all'immagine successiva che deve apparire (activeImage) che vado a pescare da dentro pics    


    //thumbnail
    const currentActiveThumbnail = document.querySelector("img.layer-active");
    currentActiveThumbnail.classList.remove("layer-active");    
    
    const thumbnailPics = document.querySelectorAll(".thumbnails > img")
    thumbnailPics[activeThumbnail].classList.add("layer-active");
})

//prev
prevBtn.addEventListener("click", function(){
    
    activeImage--;

    activeThumbnail--;

    if(activeImage < 0){
        activeImage = picsArray.length - 1;
    }

    if(activeThumbnail < 0){
        activeThumbnail = picsArray.length - 1;
    }

    //img
    const currentActiveImage = document.querySelector("img.active");
    currentActiveImage.classList.remove("active");

    const pics = document.querySelectorAll(".pics > img");
    pics[activeImage].classList.add("active");

    
    //thumbnail
    const currentActiveThumbnail = document.querySelector("img.layer-active");
    currentActiveThumbnail.classList.remove("layer-active");    
    
    const thumbnailPics = document.querySelectorAll(".thumbnails > img")
    thumbnailPics[activeThumbnail].classList.add("layer-active");


})


