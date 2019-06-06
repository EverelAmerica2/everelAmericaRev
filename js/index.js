/*
 *sticky feature for nav-bar 
 */
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

/*
 * Function for the scroll Arrow in the Header 
 */
function scrollArrow() {
    window.scroll(0, 500);
}



/*
 * Slide show  
 */
function showSlides(n, viewPort2, viewPort3) {
    let i;
    let slides = document.getElementsByClassName("brands-box");
    //let dots = document.getElementsByClassName("dot");
    if (viewPort2.matches) {
        if (n > slides.length - 1) { slideIndex = 0 }
        if (n < 0) { slideIndex = slides.length - 1 }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }
        slides[slideIndex].style.display = "inline-block";
        //dots[slideIndex-1].className += " active";
    } else if (viewPort3.matches) {
        if (n > slides.length -1) { slideIndex = 0 }
        if (n < 0) { slideIndex = slides.length - 3 }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "inline-block";
        slides[slideIndex + 1].style.display = "inline-block";
        slides[slideIndex + 2].style.display = "inline-block";
    } else {
        if (n > slides.length -1) { slideIndex = 0 }
        if (n < 0) { 
            if(slides.length >= 4){
                slideIndex = slides.length - 4; 
            }else{
                slideIndex = 0
            }
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "inline-block";
        slides[slideIndex + 1].style.display = "inline-block";
        slides[slideIndex + 2].style.display = "inline-block";
        slides[slideIndex + 3].style.display = "inline-block";

    }


}


let viewPort2 = window.matchMedia("(max-width: 600px)");
let viewPort3 = window.matchMedia("(max-width: 56.25em)");
let slideIndex = 0;
showSlides(slideIndex, viewPort2, viewPort3);

function plusSlides(n) {
    if (viewPort2.matches) { slideIndex = slideIndex + n }
    else if (viewPort3.matches) { slideIndex = slideIndex + 3 * n }
    else { slideIndex = slideIndex + 4 * n }
    showSlides(slideIndex, viewPort2, viewPort3);
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex, viewPort2, viewPort3);
}

/*
 * phone size nav-bar checkbox 
 */
function navCheckbox() {
    let naviToggle = document.getElementById('navi-toggle');
    naviToggle.checked = false;
}
