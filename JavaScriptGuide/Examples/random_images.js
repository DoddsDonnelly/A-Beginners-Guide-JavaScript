var r_images = [
    "/Images/1.png",
    "/Images/2.png",
    "/Images/3.png",
    "/Images/4.png",
    "/Images/5.png",
    "/Images/6.png"
],
im = document.getElementById("my_image"),
rand_int = Math.floor(Math.random() * 6);
im.src = r_images[rand_int];