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
    // ^ - match from the beginning of expr
    // $ - match till the end of expr
    // ? - preceding character may or may not be present (optional)
    // \d - a digit
    // \. - a dot
    // () for grouping set of characters
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

function sqrt() {
    const currentText = inputBox.innerText;

    if( isNumber( currentText ) ) {
        // best to create isNegative() / isPositive() helper
        if( currentText[0] !== '-' ) {
            inputBox.innerText = Math.sqrt( currentText );
        }
    }
}

function sq() {
    // display square of the number
    const currentText = inputBox.innerText;
    
    if( isNumber( currentText ) ) {
        inputBox.innerText = inputBox.innerText * inputBox.innerText;
    }
}

function exp() {
    // display e^currentText (Math.exp)
    const currentText = inputBox.innerText;

    if( isNumber( currentText ) ) {
        inputBox.innerText = Math.exp( currentText );
    }
}

// check currentText is not negative
function ln() {
    // use Math.log() // base is e=2.72 in Math.log()
    const currentText = inputBox.innerText;

    if( isNumber( currentText ) ) {
        if( currentText[0] !== '-' ) {
            inputBox.innerText = Math.log( currentText );
        }
    }
}

function cos() {
    // use Math.cos()
    const currentText = inputBox.innerText;

    if( isNumber( currentText ) ) {
        inputBox.innerText = Math.cos( currentText );
    }
}

function sin() {
    // use Math.sin()
    const currentText = inputBox.innerText;

    if( isNumber( currentText ) ) {
        inputBox.innerText = Math.sin( currentText );
    }
}

function tan() {
    // use Math.tan()
    const currentText = inputBox.innerText;

    if( isNumber( currentText ) ) {
        inputBox.innerText = Math.tan( currentText );
    }
}
