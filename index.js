const menu = document.getElementById("menu");

function toggleMenu() {
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        menu.style.display = "none";
    }
});