var mlink = document.getElementById("morelink"),
    mdiv = document.getElementById("morediv");

mlink.addEventListener("click", function(event) {
    event.preventDefault();
    mdiv.style.display = (mdiv.style.display === "none") ? "block" : "none";
}, false);
mdiv.style.display = "none";