function displaySymbol( event ) {
    // button that was clicked
    const button = event.target;

    // the text within the button
    const buttonText = button.innerText;

    // put this text in the .input-box (use querySelector)
    const inputBox = document.querySelector( '.input-box' );
    inputBox.innerText = inputBox.innerText + buttonText;
}

function cancel() {
    // clear the input-box
}

function backspace() {
    // use substring() function on the input-box innerText
}

function calculate() {
    const inputBox = document.querySelector( '.input-box' );
    const expr = inputBox.innerText;
    inputBox.innerText = eval( expr );
}