var change = document.getElementById("div1");
var link = document.getElementById("c_link");
link.onclick = function () {
    change.style.backgroundColor = "#CCCCCC";
    change.innerHTML = "<strong>Right now!</strong> Was that quick or what?";
    return false;
};
