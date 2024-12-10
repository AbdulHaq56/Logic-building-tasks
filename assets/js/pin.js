do {
    let code = 1927  
    let pinCode = prompt("Enter Pin Code")

    if (pinCode == "") {
        alert("Required to fill")
        
    } else if(pinCode != code) {
        alert("incorrect pin")
    }
} while (pinCode == code)
    let div = document.getElementById("pinCode")
    div.innerHTML = `${pinCode}`