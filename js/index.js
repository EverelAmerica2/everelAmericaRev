
function navSticky(x) {
    let navbar2 = document.getElementById("header-nav2");
    let navbar1 = document.getElementById('header-nav1');
    let sticky = navbar1.offsetTop;

    if (x.matches) {
        if (window.pageYOffset >= sticky) {
            navbar2.classList.add("sticky");
            navbar2.style.display = 'inline-block';
        } else {
            navbar2.classList.remove("sticky");
            navbar2.style.display = 'none';
        }
    }
}

let viewPort = window.matchMedia("(min-width: 601px)");
window.onscroll = function () { navSticky(viewPort) };



/*
function navCheckbox() {
  let naviToggle = document.getElementById('navi-toggle');
  naviToggle.checked = false;
}
 
*/

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