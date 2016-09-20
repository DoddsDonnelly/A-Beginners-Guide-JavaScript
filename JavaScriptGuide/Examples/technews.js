var slinks = [
        document.getElementById("sumlink"), document.getElementById("statslink"), document.getElementById("comlink")
    ],
    sdivs = [document.getElementById("sumdiv"), document.getElementById("statsdiv"), document.getElementById("comdiv")];

function change_div(count) {
    slinks[count].addEventListener("click", function (event) {
        event.preventDefault();
        sdivs[count].style.display = "block";
        for (var j = 0; j < sdivs.length; j++) {
            if (j === count) {
                continue;
            } else {
                sdivs[j].style.display = "none";
            }
        }
    }, false);
}

for (var i = 0; i < slinks.length; i++) {
    change_div(i);
}
sdivs[1].style.display = "none";
sdivs[2].style.display = "none";