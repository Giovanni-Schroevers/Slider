'use strict';

var source = document.querySelector(".slide__img");
var image = 1;
var timer = true;
var slideshow = window.setInterval(nextImage, 3000);

function nextImage() {
    if(image < 4 && image > 0) {
        image++;
    }else{
        image = 1;
    }
    source.src = "img/thumb" + image + ".jpg";
    if(timer){
        window.clearInterval(slideshow);
        slideshow = window.setInterval(nextImage, 3000);
    }
}

function previousImage() {
    if(image > 1 && image < 5) {
        image--;
    }else{
        image = 4;
    }
    source.src = "img/thumb" + image + ".jpg";
    if(timer){
        window.clearInterval(slideshow);
        slideshow = window.setInterval(nextImage, 3000);
    }
}

function pause(){
    if(timer){
        window.clearInterval(slideshow);
        timer = false
    }
    else if(!timer){
        slideshow = window.setInterval(nextImage, 3000);
        timer = true;
    }
}

document.addEventListener("keydown", function(event){
    if(event.key === "ArrowRight"){
        nextImage();
    }else if(event.key === "ArrowLeft") {
        previousImage();
    }
});
