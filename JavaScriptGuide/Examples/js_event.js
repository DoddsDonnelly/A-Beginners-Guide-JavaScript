function hi_and_bye() {
    window.alert('Hi!');
    window.alert('Bye!');
}

var hi_button = document.getElementById("say_hi");
hi_button.onclick =    function () {
    window.alert('Hi!(2)');
    window.alert('Bye!(2)');
}
