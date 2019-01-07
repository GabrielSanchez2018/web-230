/*
Title: sanchez-assignment-4.4.js
Date: 1/5/2019
Author: Profesor Krasso
Modified by: Gabriel Sanchez
Description: Predicates
*/
/*


  FirstName LastName
  Assignment 4.4
  Today's Date

  -- ORIGINAL ARRAY --
  Alabama
  Nebraska
  Iowa
  California
  Nevada

  -- SORTED ARRAY --
  Alabama
  California
  Iowa
  Nebraska
  Nevada

  -- SELECTED VALUE --
  Iowa

*/
/* header */
var header = require ('../sanchez-header.js');
console.log(header.display('Gabriel', 'Sanchez', 'Assignment 4.4'));
console.log('\n');

// Program starts 
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

// Original Array 
console.log(" --ORIGINAL ARRAY--");
for (var x = 0; x < states.length; x++){
  console.log(states[x]);
}

//Function getState
function getState(stringOne, stringTwo){
  if (stringOne === stringTwo)
  return true
}


// sorted array 
console.log("");
console.log("--SORTED ARRAY--");
for (var s = 0; s < states.length; s++){
  states.sort()
  console.log(states[s]);
}
// filter() 
console.log('');
console.log("--STATE VALUE--")
console.log(states.filter(function(a){
  return getState(a, "Iowa")
})[0]);

// END OF PROGRAM 