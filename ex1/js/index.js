var introduceNumber = window.prompt("Please enter a number: ");

if (isNaN(introduceNumber)) {
    alert("Input isn't a Integer. Try again!");
} else {
    document.write("<h2>".concat("TABLE OF THE NUMBER: ".concat(introduceNumber).concat("</h2>")));
    for (let i = 1; i <= 10; i++) {
        const result = i * introduceNumber;
        while (i <= 10) {
            document.write("<br>" + result + " * " + i + " = " + (i * result));
            i++;
        }
    }
}