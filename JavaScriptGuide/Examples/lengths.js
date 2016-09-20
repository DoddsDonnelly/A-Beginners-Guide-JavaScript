// Getting form by length
for (var count = 0; count < document.forms.length; count++) {
    var formnum = count + 1;
    document.write("Form " + formnum + " has " + document.forms[count].length);
    document.write(" elements.<br>");
}
// Getting form by name
document.write("<br>The name form " + document.name_form.length + " elements.<br>");
// Getting form by id
var f_length = document.getElementById("id_form").length;
document.write("<br>The id form has " + f_length + " elements.<br>")