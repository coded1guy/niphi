// NAVBAR
console.log("navbar debug");


// CAROUSEL
document.getElementById("slide1").addEventListener("animationend", () => {
    console.log("o ti pari")
    document.getElementById("slide1").style.animation = "disappear 1s ease-out";
    document.querySelector("h1").style.animationIterationCount = "1";
})