// Exercice 3: Filtrage avec des expressions régulières
function clean(e) {
var textfield = document.getElementById(e);
var regex = /[A-Za-z0-9_]/gi;
textfield.value = textfield.value.replace(regex, "");
}
