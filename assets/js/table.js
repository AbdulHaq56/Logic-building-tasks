let tb = document.getElementById("tbody");
let x = "";
let uTable = parseInt(prompt("Which table you want to print"));
let uIteration = parseInt(prompt("Enter Iteration Value"));
let uTermination = parseInt(prompt("Enter Termination Value"));

if (uTable === null || uIteration === null || uTermination === null) {
  alert("Enter all details");
  location.assign("table.html");
} else if (uIteration >= uTermination) {
  alert("Please give termination greater");
  location.assign("table.html");
} else if (isNaN(uTable || uIteration || uTermination)) {
  alert("Please give val in number");
  location.assign("table.html");
} else {
  for (let i = uIteration; i <= uTermination; i++) {
    let bgColor = (i % 2) ? 'green' : 'yellow';
    x += `
    <tr style="background-color: ${bgColor};">
                <td>${uTable}</td>
                <td>x</td>
                <td>${i}</td>
                <td>=</td>
                <td>${uTable * i}</td>
    </tr>
    `;
  }
  tb.innerHTML = x;
}
