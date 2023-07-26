console.log('OK');

//APERTURA E CHIUSURA MENU

var open_menu = document.querySelector('.icon-menu');

open_menu.addEventListener("click", function() {
    let menu = document.getElementById("menu");
    menu.classList.add("menu--open");
})

var close_menu = document.querySelector("#parola");
close_menu.addEventListener("click", function() {
    menu.classList.remove("menu--open");
})

//APERTURA TENDA CART
var cartClose = document.querySelector(".cart-close");

// apri
var open_cart = document.querySelector('#cart');
open_cart.addEventListener("click", function() {
    cartClose.classList.add("cart--open");  //avevo messo add ma la var succ no run comunque
})

// chiudi
var chiusura_cart = document.querySelector('.chiusura-cart');
chiusura_cart.addEventListener("click", () => {
    cartClose.classList.remove("cart--open")
})



// ADD TO CART
var shopClose = document.querySelector(".shop-close");


//APRI
var open_shop = document.querySelector('.fixed__content');

open_shop.addEventListener("click", function() {
    let shopClose = document.querySelector(".shop-close");
    shopClose.classList.toggle("shop--open");  //avevo messo add ma la var succ no run comunque
})


//CHIUDI
var chiude = document.querySelector('#chiude');
chiude.addEventListener("click", () => {
    shopClose.classList.remove("shop--open")
})








//prova testo a WAVE

// var textPath = document.querySelector('#text-path');

// var textContainer = document.querySelector('#text-container');

// var path = document .quarySelector(
//     textPath.getAttribute('href')
// );

// var pathLength = path.getTotalLength();
// console.log(pathLength);

// function updateTextPathOffset(offset){
//     textPath.setAttribute('startOffset', offset);
// }

// updateTextPathOffset(pathLength);

//function onScroll(){
  //requestAnimationFrame(function() {
    //var rect = textContainer.getBoundingClientRect();
    //var scrollPercent = rect.y /
    //window.innerHeight;
    //console.log(scrollPercent);
    //updateTextPathOffset( scrollPercent * 2 * pathLength);
    //console.log(rect.y);
    
//    });   
//}



// window.addEventListener('scroll',onScroll);





gsap.to(".imgpiccolo", {
    y: 10,
    duration: 2,
    scrollTrigger: {
        trigger: ".imgpiccolo",
        start: "top 50%",
        //toggleActions: "play pause resume reset",
        scrub: 4,
        
    }
});

gsap.to(".img-2", {
    x: 400,
    duration: 3,
    scrollTrigger: {
        trigger: ".img-2",
        start: "top 80%",
        //toggleActions: "play pause resume reset",
        scrub: 3,
        
    }
    
});

gsap.to(".img-3", {
    borderRadius: "0px",
    duration: 3,
    scrollTrigger: {
       trigger: ".img-3",
       start: "top 80%",
       toggleActions: "play pause resume reset",
       scrub: 4
    }
});

gsap.to(".img-5", {
    width: "20%",
    duration: 3,
    scrollTrigger: {
       trigger: ".img-5",
       start: "top 80%",
       toggleActions: "play pause resume reset",
       scrub: 4
    }
});

gsap.to(".celeb-top-img", {
    y: -100,
    duration: 4,
    scrollTrigger: {
        trigger: ".celeb-top-img",
        start: "top 90%",
        toggleActions: "play pause resume reset",
        scrub: 2
    }
})

gsap.to(".celeb-top-video", {
    y: -100,
    duration: 4,
    scrollTrigger: {
        trigger: ".celeb-top-video",
        start: "top 90%",
        toggleActions: "play pause resume reset",
        scrub: 1
    }
})

gsap.to(".celeb-top-text", {
    y: 10,
    duration: 4,
    scrollTrigger: {
        trigger: ".celeb-top-text",
        start: "top 90%",
        toggleActions: "play pause resume reset",
        scrub: 2
    }
})

gsap.to(".celeb-bottom-img", {
    y: 10,
    duration: 4,
    scrollTrigger: {
        trigger: ".celeb-bottom-img",
        start: "top 90%",
        toggleActions: "play pause resume reset",
        scrub: 2
    }
})

gsap.to(".wine-bottle img", {
    y: 100,
    scrollTrigger: {
        trigger: ".wine-bottle img",
        start: "top -30%",
        toggleActions: "play pause resume reset",
        scrub: 4,
        
    }
});
    






// PROVO MOVIMENTO BOTTIGLIA



//gsap.matchMedia(max-width:650px)(".img-2", {
    //x: 100,
    //duration: 3,
    

//});




