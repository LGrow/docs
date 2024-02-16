let menu = document.getElementById("menu");
let arrowOpen = document.querySelector("span.arrowOpen");
let arrowClose = document.querySelector("span.arrowClose");
let nav = document.getElementById("nav");
var open = false;
document.body.scrollIntoView();

function openMenu() {
    if (open == false) {
        menu.classList.toggle("enabled");
        arrowOpen.style.opacity = "0";
        nav.style.display = "flex";
        setTimeout(() => {
            arrowOpen.style.display = "none";
            arrowClose.style.display = "inline-flex";
        }, 400)
        arrowClose.style.opacity = "1";
        nav.style.opacity = "1";

        open = true;
    }

}

function closeMenu() {
    if (open == true) {
        menu.classList.toggle("enabled");
        arrowClose.style.opacity = "0";
        nav.style.opacity = "0";
        setTimeout(() => {
            arrowClose.style.display = "none";
            arrowOpen.style.display = "inline-flex";
            arrowOpen.style.opacity = "1";
            nav.style.display = "none";
        }, 400)
        open = false;
    }

}

document.addEventListener("scroll", () => {
    closeMenu();
});

// Marked?

let sections = ["home", "teste"];

var marked = document.querySelector("button.marked");

function mark(btn, section) {
    marked.classList.remove("marked");

    btn.classList.add("marked");
    marked = document.querySelector("button.marked");

    document.getElementById(sections[section]).scrollIntoView();

}