//dichiaro l'array di elementi (che poi sarebbero i nomi delle img)

const picsArray = [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg",
    "06.jpg",
    "07.jpg"
];

//dichiaro variabili a cui associo gli elementi in html

const picsElement = document.querySelector(".pics");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

//console.log(picsArray, picsElement, prevBtn, nextBtn);

//dichiaro il mio contatore per l'img da far vedere che mi servirà sia per tenere attiva la prima immagine sia per proseguire al click con le altre img riassegnando la classe man mano

let activeImage = 0;

/* numerino img */

const numberElement = document.querySelector(".number")
let number = 1;

//ciclo for: devo inserire le img in modo dinamico in html e rendere visibile solo la prima

for (let i = 0; i < picsArray.length; i++) {
    const currentImage = picsArray[i]; //currentImage = posizione i in picsArray, quindi 0 al primo giro

    //dichiaro una variabile il cui valore cambia in base a una condizione, per permettermi di assegnare la classe "active"

    let classActive;

    if(activeImage === i){
        classActive = "active";
    }
    else{
        classActive = "";
    }

    //genero le immagini

    const imageMarkup = `<img src="./assets/img/${currentImage}" alt="" class="${classActive}">`;

    //le inserisco in pagina
    picsElement.insertAdjacentHTML("beforeend", imageMarkup);

    numberElement.innerHTML = number
}

//btn: al click il contatore dell'immagine attiva deve avanzare di 1

nextBtn.addEventListener("click", function(){
    activeImage++;
    number++
    
    //se arriva alla fine dell'array, deve tornare all'inizio
    if(activeImage > picsArray.length-1){
        activeImage = 0;
        number = 1;
    }
    //console.log(activeImage);

    //seleziono l'elemento che ha active e glielo levo
    document.querySelector("img.active").classList.remove("active");

    //seleziono la nodelist in pagina
    const picsList = document.querySelectorAll(".pics > img");

    //nella nodelist in pagina vado ad aggiungere la classe all'elemento di indice activeImage (che aumenta a ogni click fino alla fine e poi torna a 0)
    picsList[activeImage].classList.add("active");


    //seleziono elemento della thumbnail che ha color active e glielo rimuovo
    document.querySelector("i.color-active").classList.remove("color-active")
    //seleziono nodelist thumbnail
    const thumbList = document.querySelectorAll(".thumbnail > i");

    thumbList[activeImage].classList.add("color-active")

    numberElement.innerHTML = number
})

prevBtn.addEventListener("click", function(){
    activeImage--;
    number--
    //se arriva alla fine dell'array, deve tornare all'inizio
    if(activeImage < 0){
        activeImage = picsArray.length - 1;
        number = picsArray.length;
    }
    //console.log(activeImage);

    //seleziono l'elemento che ha active e glielo levo
    document.querySelector("img.active").classList.remove("active");

    //seleziono la nodelist in pagina
    const picsList = document.querySelectorAll(".pics > img") 

    //nella nodelist in pagina vado ad aggiungere la classe all'elemento di indice activeImage (che aumenta a ogni click fino alla fine e poi torna a 0)
    picsList[activeImage].classList.add("active")

    //seleziono elemento della thumbnail che ha color active e glielo rimuovo
    document.querySelector("i.color-active").classList.remove("color-active")
    //seleziono nodelist thumbnail
    const thumbList = document.querySelectorAll(".thumbnail > i");

    thumbList[activeImage].classList.add("color-active")

    numberElement.innerHTML = number
})