var pn = document.getElementById("pn");
var rm = document.getElementById("reminder");

pn.onfocus = function() {
    rm.innerHTML = "Format: 123-456-7890";
};
pn.onblur = function() {
    rm.innerHTML = "";
};