const inputBox = document.querySelector( '.input-box' );

function displaySymbol( event ) {
    // button that was clicked
    const button = event.target;

    // the text within the button
    const buttonText = button.innerText;

    // put this text in the .input-box (use querySelector)
    inputBox.innerText = inputBox.innerText + buttonText;
}

function cancel() {
    inputBox.innerText = '';
}

function backspace() {
    const currentText = inputBox.innerText;
    const newText = currentText.substring( 0, currentText.length - 1 );
    inputBox.innerText = newText;
}

function calculate() {
    const expr = inputBox.innerText;
    inputBox.innerText = eval( expr );
}

function isNumber( expr ) {
    const numPat = /^-?\d+(\.\d+)?$/;
    return numPat.test( expr );
}

function changeSign() {
    const currentText = inputBox.innerText;
    
    if( isNumber( currentText ) ) {
        if( currentText[0] === '-' ) {
            // change from minus to plus (drop the minus symbol)
            inputBox.innerText = currentText.substring( 1 );
        } else {
            // change to minus
            inputBox.innerText = '-' + currentText;
        }
    }
}