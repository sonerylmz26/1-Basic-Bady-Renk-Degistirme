const body = document.getElementsByTagName("body");
console.log(body);
const btn = document.getElementById("btn");
console.log(btn);
const title = document.getElementById("title")
console.log(title)



btn.addEventListener("click", () => {
  bodyColor();


});

function bodyColor() {
  let colorOne = Math.floor(Math.random() * 255);
  let colorTwo = Math.floor(Math.random() * 255);
  let colorThree = Math.floor(Math.random() * 255);


document.body.style.backgroundColor =
    "rgb(" + colorOne + "," + colorTwo + "," + colorThree + ")";
  console.log("Random Color: " + colorOne, colorTwo, colorThree);
title.innerHTML = `Random Color: rgb (${colorOne}, ${colorTwo}, ${colorThree})`
title.style.color = "white"
title.style.backgroundColor = "rgb(73, 71, 71)"
}



