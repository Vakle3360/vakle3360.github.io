input = document.getElementById("field");

function plus() {
    text = input.value;
    input.value = text + " + "
}

function minus() {
    text = input.value;
    input.value = text + " - "
}

function multi() {
    text = input.value;
    input.value = text + " * "
}

function divi() {
    text = input.value;
    input.value = text + " / "
}

function para1() {
    text = input.value;
    input.value = text + "("
}

function para2() {
    text = input.value;
    input.value = text + ")"
}

function potens() {
    text = input.value;
    input.value = text + "^"
}

function root() {
    text = input.value;
    input.value = text + "^(1/ )"
}