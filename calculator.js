let screen = document.getElementById("screen");
let button = document.querySelectorAll("button");

let screenValue = '';

for (let item of button) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        // console.log("Button is", buttonText);

        if (buttonText == "/") {
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == "X") {
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == "C") { 
            screenValue = "";
            screen.value += screenValue;
        }
        else if (buttonText == "AC") {
            screenValue = "";
            screen.value = "";
        }
        else if (buttonText == "=") {
            screen.value = eval(screenValue);
            screenValue = "";
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}