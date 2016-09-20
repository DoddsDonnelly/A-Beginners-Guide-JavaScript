var startingDiv = document.getElementById("div1");
var divTitle = startingDiv.title;
window.alert(divTitle);

var newDiv = document.createElement("div");
var divText = document.createTextNode("See you!");
newDiv.appendChild(divText);
divText.title = "Lucky!";
startingDiv.appendChild(newDiv);

