let rows = parseInt(prompt("Enter how many row u want range of 1 to 10"));
if (isNaN(rows) || rows == null || rows < 1 || rows > 10) {
  alert("Invalid Input, fill again");
  location.assign("tree.html");
} else {
  for (let i = 1; i <= rows; i++) {
    for (let s = 0; s < rows - i; s++) {
      document.write("&nbsp;&nbsp;");
    }
    for (let j = 0; j < 2 * i - 1; j++) {
      document.write("*");
    }
    document.write("<br>");
  }
}