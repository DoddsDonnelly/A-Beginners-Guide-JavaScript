var msg = "", city = window.prompt("What is the name of your city?", "");
if ((city === null) || (city === "")) {
    msg = "No city entered.  Cannot determine delivery availability.";
} else {
    switch (city) {
        case "Johnstown":
            msg = "We can have items delivered to you in 3 days.";
            break;
        case "Donille":
            msg = "We can have items delivered to you in 1 week.";
            break;
        case "Danieltown":
        case "Martyville":
            msg = "We can have items delivered to you in 2 week.";
            break;
        default:
            msg = "Sorry!  We do not deliver to your city yet.";
    }
}
document.write(msg);