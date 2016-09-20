function set_it() {
    var name = prompt("Enter your name.", ""),
        thetext = "name=" + name,
        expdate = ";expires=Mon, 19 Sept 2016 13:00:00 UTC",
        newtext = escape(thetext);
    newtext += expdate;
    document.cookie = newtext;
}

function read_it() {
    var mycookie = document.cookie,
        fixed_cookie = unescape(mycookie),
        thepair = fixed_cookie.split("="),
        uname = thepair[1],
        greeting = document.getElementById("greeting");
    greeting.innerHTML = "Hello, " + uname;
}

if (document.cookie) {
    read_it();
}
else {
    set_it();
    read_it();
}
