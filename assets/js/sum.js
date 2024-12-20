let uPrompt = parseInt(prompt("Enter the value:"));
if (isNaN(uPrompt) || uPrompt <= 0) {
  alert("Invalid input! Please enter a positive number.");
} else {
  let sum = 0;
  for (let i = 1; i <= uPrompt; i++) {
    sum += i;
  }
  document.write(`The sum of numbers from 1 to ${uPrompt} is: ${sum}`);
}
