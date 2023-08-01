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

// PROVA TESTO WAVE - 2 PROVA - funzionante

document.addEventListener('DOMContentLoaded', () => {
    const textPath = document.getElementById("text-path");
    const scrollSpeed = 2.5; //posso cambiare il valore per cambiare velocità testo
    const animationDirection = "left"; // da che parte andrà il testo
    const startPosition = -100; // settare la posizione di inizio

    const updateTextPosition = () => {
        const container = document.querySelector(".wave");
        const containerRect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (containerRect.top <= windowHeight && containerRect.bottom >= 0) {
            const directionMultiplier = animationDirection === "right" ? 1 : -1;
            const startOffset = startPosition + ((containerRect.top - windowHeight) / (containerRect.height + windowHeight)) * 100 * scrollSpeed * directionMultiplier;
            textPath.setAttribute("startOffset", startOffset + "%");
        }
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                updateTextPosition();
                }
    
            });
        },
        { threshold: 0.1 }
    );

    observer.observe(textPath);
    window.addEventListener("scroll", updateTextPosition);
})

//MOVIMENTO IMMAGINI
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
        scrub: 4
        
    }
});
    


// PROVO MOVIMENTO BOTTIGLIA



//gsap.matchMedia(max-width:650px)(".img-2", {
    //x: 100,
    //duration: 3,
    

//});


//MATCHMEDIA NON FUNZIONA

let mm = gsap.matchMedia();

mm.add(" (max-width: 1200px) ", () => {

    gsap.to(".img-2", {
        x:10
       
    });
})




