var dragdiv = document.getElementById("mylink"),
    dropdiv = document.getElementById("dropdiv");
dropdiv.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", "This link goes to my Web Site!");
}, false);
dropdiv.addEventListener("dragover", function (event) {
    event.preventDefault();
}, false);
dropdiv.addEventListener("dragenter", function (event) {
    event.preventDefault();
}, false);
dropdiv.addEventListener("drop", function (event) {
    var divtext = event.dataTransfer.getData("Text");
    event.preventDefault();
    dropdiv.innerHTML = divtext;
}, false);