/*
  Expected output:

  FirstName LastName
  Exercise 3.2
  Today's Date

  // output from the match() function
  false
  true

  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/
/*

Title: sanchez-assignment-3.2.js
Date: 12/16/2018
Author: Profesor Krasso
Modified by: Gabriel Sanchez
Description: Assignment 3.2
*/


/* header */
var header = require ('../sanchez-header.js');
console.log(header.display('Gabriel', 'Sanchez', 'Assignment 3.2'));
console.log('\n');

/*
  Expected output:

  FirstName LastName
  Exercise 3.2
  Today's Date

  // output from the match() function
  false
  true

  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/
//Variables
var testVar1 = "Truck";
var testVar2 = "Car";
var testVar3 = "Bike";
var testVar4 = "Bike";
var testVar5 = "Four";
var testVar6 = "Tree";
//Functions

function match(arg1, arg2){
  if(arg1 === arg2)
    return true
    else
    return false
}
// output from match()
console.log(match("A","B"));
console.log(match(2,2));

// Functions
function logMismatch(arg1, arg2){
  console.log (arg1 + " and " + arg2 + " Do not match! ");
}

function logMatch(arg1, arg2){
  console.log (arg1 + " and " + arg2 + " Do match! ");
}
// Condiational "if...else" statements. Include checks for all six (6) text variables.

if (match(testVar1, testVar2)){
  logMatch(testVar1, testVar2)
}else{
  logMismatch(testVar1, testVar2)
}

if (match(testVar3, testVar4)){
  logMatch(testVar3, testVar4)
}else{
  logMismatch(testVar3, testVar4)
}

if (match(testVar5, testVar6)){
  logMatch(testVar5, testVar6)
}else{
  logMismatch(testVar5, testVar6)
}
// End of the program











