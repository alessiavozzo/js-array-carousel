/* VARIABILI */
//img array

picsArray = [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp",
]

const picsElement = document.querySelector(".pics")

let activeImage = 0  //img in pos 0

//console.log(picsArray,activeImage, picsElement);



/* FOR */

//aggiungere le immagini in modo dinamico col template literal

//ciclando tra le immagini, il percorso delle img che ho scritto va inserito nel tag immagine che andrò a creare in modo dinamico

for (let i = 0; i < picsArray.length; i++) {
    const currentImage = picsArray[i];
    //console.log(currentImage);

    const currentImageMarkup = `<img src="./assets/img/${currentImage}" alt="" class="active">`
    //console.log(currentImageMarkup);
}



//buttons addEventListener