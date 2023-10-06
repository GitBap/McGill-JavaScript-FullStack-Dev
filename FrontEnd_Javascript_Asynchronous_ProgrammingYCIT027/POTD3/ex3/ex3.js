/* Write a JavaScript code that shows in the console
 the character associated with a pressed key */

function showPressedKey(event) {
  console.log("Pressed Key: " + event.key);
}

document.addEventListener("keydown", showPressedKey);
