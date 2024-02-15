var menu = document.getElementById("menu");
var arrowOpen = document.querySelector("span.arrowOpen");
var arrowClose = document.querySelector("span.arrowClose");
var nav = document.getElementById("nav");

function openMenu() {
    menu.classList.toggle("enabled");
    arrowOpen.style.opacity = "0";
    setTimeout(() => {
        arrowOpen.style.display = "none";
        arrowClose.style.display = "inline-flex";
    }, 400)
    arrowClose.style.opacity = "1";
    nav.style.opacity = "1";
}

function closeMenu() {
    menu.classList.toggle("enabled");
    arrowClose.style.opacity = "0";
    nav.style.opacity = "0";
    setTimeout(() => {
        arrowClose.style.display = "none";
        arrowOpen.style.display = "inline-flex";
        arrowOpen.style.opacity = "1";
    }, 400)
}