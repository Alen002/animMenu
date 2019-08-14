var overlay = document.getElementById("overlay");

var exit = document.getElementById("exit");

document.getElementById("openMenu").addEventListener("click", function() {
    overlay.classList.add("show-menu");
})

document.getElementById("exit").addEventListener("click", function() {
    overlay.classList.remove("show-menu");
})
