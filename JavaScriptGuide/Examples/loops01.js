// Example 1
document.write("Get ready for some repeated text. <br>");
for (var count = 1; count < 11; count++) {
    document.write(count + ". I am part of a loop!<br>");
}
document.write("Now we are back to the plain text.");

// Example 2
document.write("<br><br><br>");
for (var count = 1; count < 11; count++) {
    document.write("I am part of a loop!<br>");
    for (var nestcount = 1; nestcount < 3; nestcount++) {
        document.write("I keep interrupting in pairs!<br>");
    }
}
document.write("Now we are back to the plain text.");

// Example 3
document.write("<br><br><br>");
for (var count = 1; count < 11; count++) {
    if (count === 5) {
        document.write("The loop is halfway done!<br>");
    } else
        document.write("I am part of a loop!<br>");
}
document.write("Now we are back to the plain text.");

// Example 4 (not from book)
document.write("<br><br><br>");
for (var count = 1; count < 100; count++) {
    if (count % 3 === 0) {
        document.write("Fizz<br>");
    } else if (count % 5 === 0) {
        document.write("Buzz<br>");
    } else
        document.write(count + "<br>");
}
document.write("Now we are back to the plain text.");

// Example 5
document.write("<br><br><br>");
document.write("Get ready for some repeated text. <br>");
var count = 1;
while (count < 11) {
    document.write(count + ". I am part of a loop!<br>");
    count++;
}
document.write("Now we are back to the plain text.");

// Example 6
document.write("<br><br><br>");
document.write("Get ready for some repeated text. <br>");
var count = 1;
do {
    document.write(count + ". Hi<br>");
    count++;
} while (count < 10);
document.write("Now we are back to the plain text.");

// Example 7
document.write("<br><br><br>");
var stopnumber = 5;
for (var count = 1; count < 11; count++) {
    if (count === stopnumber) {
        document.write("Sorry, the loop stops here!<br>");
        break;
    } else {
        document.write(count + ". I am part of a loop!<br>");
    }
}
document.write("Now we are back to the plain text.");

// Example 8
document.write("<br><br><br>");
var skipnumber = 5;
for (var count = 1; count < 11; count++) {
    if (count === skipnumber) {
        document.write("Loop doesn't Stop <br>");
        continue;
    }
    document.write(count + ". I am part of a loop!<br>");
}
document.write("Now we are back to the plain text.");