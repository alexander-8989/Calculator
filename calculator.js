
// Mapping for Clear button
function clearScr() {
    document.getElementById("screen").value = " ";
}

// Mapping for DEL button
function back() {
    let back = document.getElementById("screen").value;
    document.getElementById("screen").value = back.slice(0, -1);
}

// Mapping for Display the input 
function display(input) {
    document.getElementById("screen").value += input;
}

// Mapping for Equals to button
function calculate() {
    try {
        document.getElementById("screen").value =
            eval(document.getElementById("screen").value);
    } catch (error) {
        document.getElementById("screen").value = "Error";
    }
}

// Mapping for Enter key
function keydown(event) {
    var input = document.getElementById("screen");
    if (event.keyCode == 13) {
        calculate();
    }
}

// Mapping for restriction of alphabet key
function isAlphabetKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 40 || charCode > 57)) {
        return false;
    }
    return true;
}