let tBody = document.getElementById("tBody");
let tableRow = "";
let stdDetails = [
  ["Ali", "Adse", "11 to 1", 8650],
  ["Hassan", "Cpism", "9 to 11", 8650],
  ["Umer", "Hdse", "1 to 3", 8650],
  ["Asad", "Adse", "9 to 11", 8650],
  ["Awais", "Cpism", "9 to 11", 8650],
  ["Noman", "Hdse", "9 to 11", 8650],
  ["Aleem", "Adse", "9 to 11", 8650],
  ["Hussain", "Cpism", "9 to 11", 8650],
  ["abdullah", "Hdse", "9 to 11", 8650],
  ["raza", "Adse", "9 to 11", 8650],
  ["zaid", "Cpism", "9 to 11", 8650],
  ["mansoor", "Hdse", "9 to 11", 8650],
  ["azan", "Cpism", "9 to 11", 8650],
  ["tanveer", "Hdse", "9 to 11", 8650],
  ["huzaifa", "Adse", "9 to 11", 8650],
  ["adil", "Cpism", "9 to 11", 8650],
  ["hadi", "Hdse", "9 to 11", 8650],
  ["salman", "Adse", "9 to 11", 8650],
  ["saim", "Cpism", "9 to 11", 8650],
  ["manzoor", "Hdse", "9 to 11", 8650],
];

for (let row = 0; row < stdDetails.length; row++) {
  let bgColor = row % 2 ? "cyan" : "yellow";
  tableRow += `<tr style="background-color: ${bgColor};">`;
  for (let column = 0; column < stdDetails[row].length; column++) {
    tableRow += `<td>${stdDetails[row][column]}</td>`;
  }
  tableRow += "</tr>";
}
tBody.innerHTML = tableRow;