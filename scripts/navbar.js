// NAVBAR
// control for the toggling the dropdown and the menu icon
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

// close the dropdown and change the menu icon to close icon when the body is clicked
document.onclick = (e) => {
    if(!closeMenuBtn.contains(e.target) && !openMenuBtn.contains(e.target) && closeMenuBtn.style.display == "block") {
        openMenuBtn.style.display = "block";
        closeMenuBtn.style.display = "none";
    }
}
