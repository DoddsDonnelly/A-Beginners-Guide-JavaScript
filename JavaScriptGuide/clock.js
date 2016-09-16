function startclock() {
    var thetime = new Date(),
        hours = thetime.getHours(),
        mins = thetime.getMinutes(),
        secn = thetime.getSeconds(),
        ap = hours >= 12 ? "p.m." : "a.m.",
        clock_div = document.getElementById("my_clock");
    hours = hours >= 13 ? hours -= 12 : hours;
    hours = hours < 1 ? 12 : hours;
    mins = mins < 10 ? "0" + mins : mins;
    secn = secn < 10 ? "0" + secn : secn;
    clock_div.innerHTML = hours + ":" + mins + ":" + secn + " " + ap;
    setTimeout(function() { startclock(); }, 1000);
}

startclock();