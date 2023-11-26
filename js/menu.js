var isClose = true;
let menu = document.querySelector("menu");
let arrowClose = document.querySelector(".arrowClose");
let arrowOpen = document.querySelector(".arrowOpen");

function closeMenu() {
    menu.classList.toggle("open");
    arrowClose.style.display = "flex";
    arrowClose.style.opacity = "0";
    document.querySelector(".nav").style.opacity = "0";
    isClose = true;

    setTimeout(none, 1000);

    function none() {
        arrowClose.style.display = "none";
        arrowOpen.style.display = "inline-flex";

        document.querySelector(".nav").style.display = "none";
        setTimeout(opacity, 50);

        function opacity() {
            arrowOpen.style.opacity = "1";
        }

    }
}

function openMenu() {
    menu.classList.add("open");
    arrowOpen.style.display = "inline-flex";
    arrowOpen.style.opacity = "0";
    document.querySelector(".nav").style.display = "inline-flex";
    isClose = false;
    setTimeout(none, 1000);

    function none() {
        arrowOpen.style.display = "none";
        arrowClose.style.display = "inline-flex";

        setTimeout(opacity, 50);

        function opacity() {
            arrowClose.style.opacity = "1";

            document.querySelector(".nav").style.opacity = "1";
        }
    }

}

window.addEventListener("scroll", () => {
    if (isClose == false) {
        closeMenu()
    }

})

//isMarked = false

var home = document.getElementById("home");

function reset() {
    home.classList.remove("marked");
}

//isMarked = true

const menuButton = document.querySelector("button.nav");


function welcome() {
    document.querySelector("main").scrollIntoView()
}
