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
    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';

    var percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;

    change(percent);
});

let sections = ["home", "about", "segundo"];

var marked = document.querySelector("button.marked");

function home(btn) {
    document.getElementById("home").scrollIntoView();
    mark(btn);
}

function about(btn) {
    document.getElementById("about").scrollIntoView();
    mark(btn);
}

function example(btn) {
    document.getElementById("example").scrollIntoView();
    mark(btn);
}

function mark(btn) {
    marked.classList.remove("marked");
    btn.classList.add("marked");
    marked = document.querySelector("button.marked");
}

function change(percent) {
    if (percent < 50) {
        btn = document.querySelector("nav .button");
        mark(btn);
    } else if (percent >= 50 && percent < 89) {
        btn = document.getElementById("segundo");
        mark(btn);
    } else if(percent >= 90) {
        btn = document.getElementById("terceiro");
        mark(btn);
    }
}