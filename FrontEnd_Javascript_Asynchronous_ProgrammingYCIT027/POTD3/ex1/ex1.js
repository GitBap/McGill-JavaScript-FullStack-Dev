/* Write the associated JavaScript code that updates the background color of 
all div tags according to the key (R, Y, G, or B) pressed by the user */

function changeBackgroundColor(color) {
  for (let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = color;
  }
}

var divs = document.getElementsByTagName("div");

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "r":
      changeBackgroundColor("red");
      break;
    case "y":
      changeBackgroundColor("yellow");
      break;
    case "g":
      changeBackgroundColor("green");
      break;
    case "b":
      changeBackgroundColor("blue");
      break;
  }
});
