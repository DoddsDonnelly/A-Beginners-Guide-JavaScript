function car_cost(mycar, paycheck) {
    window.alert("You have a " + mycar + " and make $" + paycheck);
}

function get_added_text() {
    var string1 = "This project ";
    var string2 = "is almost fun!";
    var addStrings = string1 + string2;
    return addStrings;
}

car_cost("Mustang", 1500);
var alerttext = get_added_text();
window.alert(alerttext);