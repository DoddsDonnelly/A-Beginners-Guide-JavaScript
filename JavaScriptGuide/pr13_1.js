var getemail = document.getElementById("getemail");
getemail.addEventListener("submit", function(event) {
    var email_add = document.getElementById("email").value;
    event.preventDefault();
    if ((email_add.indexOf("@") >= 0) && (email_add.indexOf(".") >= 0)) {
        alert("Thank you!");
    } else {
        alert("The @ and . characters are required in the e-mail address");
    }
}, false)