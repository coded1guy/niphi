// NAVBAR
console.log("navbar debug");
let openMenuBtn = document.querySelector("button#menu");
let closeMenuBtn = document.querySelector("button#close");
let dd = document.querySelector("header > nav > div");
let ddList = document.querySelector("header > nav > div > ul");

openMenuBtn.onclick = () => {
    openMenuBtn.style.display = "none";
    closeMenuBtn.style.display = "block";
    dd.classList.remove("remove-hover");
    ddList.classList.remove("remove-hover");
}
closeMenuBtn.onclick = () => {
    openMenuBtn.style.display = "block";
    closeMenuBtn.style.display = "none";
    dd.classList.add("remove-hover");
    ddList.classList.add("remove-hover");
}

// CAROUSEL
document.getElementById("slide1").addEventListener("animationend", () => {
    console.log("o ti pari")
    document.getElementById("slide1").style.animation = "disappear 1s ease-out";
    document.querySelector("h1").style.animationIterationCount = "1";
})