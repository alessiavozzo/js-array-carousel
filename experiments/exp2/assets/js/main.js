//array

const picsArray = [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg",
    "06.jpg"
];

const textArray = [
    "fai schifo",
    "fai un po' schifo",
    "fai tanto schifo",
    "fai veramente schifo",
    "fai totalmente schifo",
    "FAI INCREDIBILMENTE SCHIFO"
];

const bgColorArray = [
    "darkred",
    "darkorange",
    "rgb(216, 216, 2)",
    "darkgreen",
    "darkcyan",
    "rgb(58, 1, 58)"
];

//variabili

const textElement = document.querySelector(".text");
const carouselElement = document.querySelector(".carousel");
//const cardElement = document.querySelector(".card")
const cardElement = document.getElementById("card-element");

const thumbnailElement = document.querySelector(".thumbnail");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

//contatore

let activeElement = 0;

for (let i = 0; i < picsArray.length; i++) {
    const currentImage = picsArray[i];
    const currentText = textArray[i];
    
    let activeClass;
    if(activeElement === i){
        activeClass = "active";
    }
    else{
        activeClass = "";
    }

    if(activeElement === i){
        activeLayer = "active-layer";
    }
    else{
        activeLayer = "";
    }

    //genero img
    const picsMarkup = `<img src="./assets/img/${currentImage}" alt="" class="${activeClass}">`;

    //genero text
    const textMarkup = `<p class="${activeClass}">${currentText}</p>`;
    //console.log(textMarkup);
    const ThumbnailMarkup = `<img src="./assets/img/${currentImage}" alt="" class="${activeLayer}">`;
    
    //incollo in pag
    carouselElement.insertAdjacentHTML("beforeend", picsMarkup);

    textElement.insertAdjacentHTML("beforeend", textMarkup);     
    
    thumbnailElement.insertAdjacentHTML("beforeend", ThumbnailMarkup);

}

cardElement.style.backgroundColor = `${bgColorArray[activeElement]}`


nextBtn.addEventListener("click", function(){

    activeElement++;
    //console.log(activeElement);

    if(activeElement > picsArray.length - 1){
        activeElement = 0;
    }
    //console.log(activeElement);

    const picsNodeList = document.querySelectorAll(".carousel > img");
    //console.log(picsNodeList);

    const textNodeList = document.querySelectorAll(".text > p");

    const thumbnailNodeList = document.querySelectorAll(".thumbnail > img");


    document.querySelector("img.active").classList.remove("active");
    document.querySelector("p.active").classList.remove("active");
    document.querySelector("img.active-layer").classList.remove("active-layer");
    

    picsNodeList[activeElement].classList.add("active");
    textNodeList[activeElement].classList.add("active");
    thumbnailNodeList[activeElement].classList.add("active-layer");

    cardElement.style.backgroundColor = `${bgColorArray[activeElement]}`

})

prevBtn.addEventListener("click", function(){

    activeElement--;
    //console.log(activeElement);

    if(activeElement < 0){
        activeElement = picsArray.length - 1;
    }
    //console.log(activeElement);

    const picsNodeList = document.querySelectorAll(".carousel > img");
    //console.log(picsNodeList);

    const textNodeList = document.querySelectorAll(".text > p");

    const thumbnailNodeList = document.querySelectorAll(".thumbnail > img");



    document.querySelector("img.active").classList.remove("active");
    document.querySelector("p.active").classList.remove("active");
    document.querySelector("img.active-layer").classList.remove("active-layer");

    picsNodeList[activeElement].classList.add("active");
    textNodeList[activeElement].classList.add("active");
    thumbnailNodeList[activeElement].classList.add("active-layer");


    cardElement.style.backgroundColor = `${bgColorArray[activeElement]}`
})