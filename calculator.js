// Get the input field
const calculationInput = document.getElementById('calculationInput');

// Get all the buttons
const buttons = document.querySelectorAll('button');

// Add event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    // Perform the respective operation based on the button clicked
    switch (buttonText) {
      case 'AC':
        calculationInput.value = ''; // Clear the input field
        break;
      case 'DEL':
        calculationInput.value = calculationInput.value.slice(0, -1); // Remove the last character
        break;
      case '=':
        try {
          calculationInput.value = eval(calculationInput.value); // Evaluate the expression and display the result
        } catch (error) {
          calculationInput.value = 'Error'; // Display 'Error' if there's an error in the expression
        }
        break;
      case 'log':
        calculationInput.value += 'Math.log('; // Append 'Math.log(' to the input field
        break;
      case '^':
        calculationInput.value += '**'; // Append '**' to the input field for exponentiation
        break;
      case 'x^2':
        calculationInput.value += '**2'; // Append '**2' to the input field for squaring
        break;
      case 'x^3':
        calculationInput.value += '**3'; // Append '**3' to the input field for cubing
        break;
      default:
        calculationInput.value += buttonText; // Append the button text to the input field
        break;
    }
  });
});
