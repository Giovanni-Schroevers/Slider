'use strict';

const SOURCE = document.querySelector(".slide__img");
let image = 1;
let timer = true;
let slideshow;

const nextImage = () => {
    if(image < 4 && image > 0) {
        image++;
    }else{
        image = 1;
    }
    SOURCE.src = `img/thumb${image}.jpg`;
    if(timer){
        window.clearInterval(slideshow);
        slideshow = window.setInterval(nextImage, 3000);
    }
};

const previousImage = () => {
    if(image > 1 && image < 5) {
        image--;
    }else{
        image = 4;
    }
    SOURCE.src = `img/thumb${image}.jpg`;
    if(timer){
        window.clearInterval(slideshow);
        slideshow = window.setInterval(nextImage, 3000);
    }
};

const pause = () =>{
    if(timer){
        window.clearInterval(slideshow);
        timer = false
    }
    else if(!timer){
        slideshow = window.setInterval(nextImage, 3000);
        timer = true;
    }
};

document.addEventListener("keydown", event => {
    if(event.key === "ArrowRight"){
        nextImage();
    }else if(event.key === "ArrowLeft") {
        previousImage();
    }
});

slideshow = window.setInterval(nextImage, 3000);