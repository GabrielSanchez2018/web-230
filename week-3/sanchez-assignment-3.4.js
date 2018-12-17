/*

Title: sanchez-assignment-3.4.js
Date: 12/16/2018
Author: Profesor Krasso
Modified by: Gabriel Sanchez
Description: Loops
*/


/* header */
var header = require ('../sanchez-header.js');
console.log(header.display('Gabriel', 'Sanchez', 'Assignment 3.4'));
console.log('\n');

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}
// Does the game match
console.log("-- DO THE NUMBERS MATCH GAME --");

// Variables
 var i = 0;
// loop
 for (var i = 0; i < 10; i++) {
  var z = randomNumber();
  if (match (i, z)){
    logMatch(i, z);
  } else {
    logMismatch(i, z);
  };
};


 // Functions
 function match(i, z){
  if(i === z)
    return true
    else
    return false
}

function logMismatch(i, z){
  console.log (i + " does not match " + z );
}

function logMatch(i, z){
  console.log (i + " Do match " + z );

}
//end of the program
