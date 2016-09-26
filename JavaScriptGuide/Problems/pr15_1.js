var im = document.getElementById("pic1"),
    imlink = document.getElementById("imlink");

//im.addEventListener("mouseover", function() {
//    im.src = "../Images/2.png";
//}, false);
//im.addEventListener("mouseout", function () {
//    im.src = "../Images/1.png";
//}, false);

function on_image() {
    im.src = "../Images/2.png";
}

function off_image() {
    im.src = "../Images/1.png";
}

im.addEventListener("mouseover", on_image, false);
im.addEventListener("mouseout", off_image, false);
imlink.addEventListener("focus", on_image, false);
imlink.addEventListener("blur", off_image, false);