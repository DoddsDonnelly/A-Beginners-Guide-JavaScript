var d1 = document.getElementById("div1");
var d2 = document.getElementById("div");
d1.onclick = function() {
    d1.style.backgroundColor = "#DDDDDD";
};

var d3 = document.getElementById("div3");
var answer_link = document.getElementById("answer_link");
answer_link.onclick = function () {
    d3.innerHTML = "That is easy, the answer is <strong>4</strong>!";
    return false;
}
