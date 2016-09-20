function newpage() {
    var thename = document.getElementById("yourname").value;
    document.open();
    document.write("<h1>Welcome!</h1>");
    document.write("Hello, " + thename + ", and welcome to my page!");
    document.close();
}

var me_div = document.getElementById("div1");
var inner_div = document.createElement("div");
var inner_div_text = document.createTextNode("More about me...");
inner_div.appendChild(inner_div_text);
inner_div.title = "More";
me_div.appendChild(inner_div);