let uName = prompt("Enter your Name");
if (uName == null || uName == "") {
  alert("Please Enter your Name");
  location.assign("index.html");
} else {
  let uAge = prompt("Enter your Age");
  if (uAge == null || uAge == "") {
    alert("Please Enter all Details");
    location.assign("index.html");
  } else if (isNaN(uAge) || uAge <= 0 ) {
    alert("Please enter a valid number for your Age");
    location.assign("index.html");
  } else {
    let uQualification = prompt("Enter your Qualification");
    if (uQualification == null || uQualification == "") {
      alert("Please Enter all Details");
      location.assign("index.html");
    } else {
      let printConfirmation = confirm(
        `Do you want to print all details or Only Name?`
      );

      if (printConfirmation) {
        document.write(
          `<div><p class="title">Your Details</p><div class="details"><p>Name:</p> <h2> ${uName}</h2> <br><p>Age:</p> <h2> ${uAge}</h2> <br><p>Qualification:</p>  <h2> ${uQualification}</h2></div></div>`
        );
      } else {
        document.write(`Name: ${uName}`);
      }
    }
  }
}
