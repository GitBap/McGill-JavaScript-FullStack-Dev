/* 1.	Write a code snippet where you have used CALLBACK functions
 for some task. Explain the logic of the code using appropriate comments. */

function goal(name, callback) {
  console.log("Goaaaaall!" + name + "scored!");
  // Calls the callback function
  callback();
}

// Describes the goal
function descriptionOfGoal() {
  console.log("What an amazing shot!");
}

// Calling the 'goal' function because a goal by Ronaldo happened
goal("Ronaldo", descriptionOfGoal);

/* 2.	Study the topic of Scope Chain. Write a code to explain the 
concept and also use appropriate comments to show the logic. */

//This variable is accesible to any function because it's a global scope
var forEveryone = "I can be accessible to every function";

// This variable is only accessible to the second function because it's the outer scope
function firstFct() {
  var notForEveryone = "I'm only accessible to secondFct";
}

function secondFct() {
  var notForEveryone = "I'm not only to anyone";
}
