var nw_win = document.getElementById("nwin"),
    cs_win = document.getElementById("cwin"),
    mywin = "";
nw_win.addEventListener("click", function(event) {
    event.preventDefault();
    window.open("newpage.html", "cool", "width=400, height=300,status=yes");
}, false);
cs_win.addEventListener("click", function(event) {
    event.preventDefault();
    mywin.resizeTo(400, 400);
    mywin.focus();
    //mywin.close();
}, false);