var urls = [
    "http://www.scripttheweb.com",
    "http://www.duckduckgo.com",
    "http://www.yahoo.com",
    "http://www.google.com"
];

var r_link = document.getElementById("random_link");
var random = Math.floor(Math.random() * 5);
r_link.innerHTML = '<a href="' + urls[random] + '">Random Site!</a>';