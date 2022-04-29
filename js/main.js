// Dropdown Menu
let show = document.getElementById("show");
let Dropdown = document.getElementById("Dropdown");

Dropdown.addEventListener("click", () => {
    show.classList.toggle("show");
    Dropdown.classList.toggle("fa-x");
    Dropdown.classList.toggle("fa-bars");
})

window.onclick = function (event) {
    if (!event.target.matches('.dropdown')) {
        show.classList.add("show");
        Dropdown.classList.toggle("fa-x");
        Dropdown.classList.toggle("fa-bars");
    }
}

// Scroll To Top Button (window.scrollY > 400)
scrollBtn = document.querySelector(".btn");

document.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
})

scrollBtn.addEventListener("click", () => {
    window.scrollTo({top: 0});
})