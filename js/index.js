
function navSticky(x) {
    let navbar1 = document.getElementById('header-nav1');


    if (x.matches) {
        if (window.pageYOffset >= 100) {
            navbar1.classList.add("sticky");
            navbar1.style.display = 'inline-block';
        } else {
            navbar1.classList.remove("sticky");
        }
    }
}

let viewPort = window.matchMedia("(min-width: 56.26em)");
window.onscroll = function () { navSticky(viewPort) };



function scrollArrow(){
    window.scroll(0,500);
}


function showSlides(n, viewPort2) {
    let i;
    let slides = document.getElementsByClassName("brands-slides");
    //let dots = document.getElementsByClassName("dot");
    if (viewPort2.matches) {
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }
        slides[slideIndex - 1].style.display = "grid";
        //dots[slideIndex-1].className += " active";
    }
}


let viewPort2 = window.matchMedia("(max-width: 600px)");
let slideIndex = 1;
showSlides(slideIndex, viewPort2);

function plusSlides(n) {
    slideIndex = slideIndex + n;
    showSlides(slideIndex, viewPort2);
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex, viewPort2);
}


function navCheckbox() {
    let naviToggle = document.getElementById('navi-toggle');
    naviToggle.checked = false;
  }
  