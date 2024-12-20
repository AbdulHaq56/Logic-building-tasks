let uPrompt = parseInt(prompt("How many rows to print Fibonacci series."));
if (isNaN(uPrompt) || uPrompt == null || uPrompt < 3 || uPrompt >= 100) {
  alert("Invalid Input, fill again");
  location.assign("fibonacci.html");
} else {
  let a = 0;
  let b = 1;
  document.write(`Fibonacci Series: ${uPrompt} times <br>`);
  document.write(`${a} ${b} `);
  for (let i = 3; i <= uPrompt; i++) {
    let temp = a + b;
    document.write(`${temp} `);
    a = b;
    b = temp;
  }
}
