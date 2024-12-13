
let oList = document.getElementById("oL")
let std = ["Awais","Asad","Ali","AbdulHaq","Haider","zohaib","mansoor","yusha","musab"]
let x='';
for (let i = 0; i < std.length; i++) {
    x += `<li>${std[i]}</li>`
}
oList.innerHTML = x