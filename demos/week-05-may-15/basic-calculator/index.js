function displaySymbol( event ) {
    // button that was clicked
    const button = event.target;

    // the text within the button
    const buttonText = event.target.innerText;

    // put this text in the .input-box (use querySelector)
    const inputBox = document.querySelector( '.input-box' );
    inputBox.innerText += buttonText;
}