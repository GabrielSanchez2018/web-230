/*

Title: sanchez-assignment-3.3.js
Date: 12/16/2018
Author: Profesor Krasso
Modified by: Gabriel Sanchez
Description: Control Statements.
*/


/* header */
var header = require ('../sanchez-header.js');
console.log(header.display('Gabriel', 'Sanchez', 'Assignment 3.3'));
console.log('\n');

/*

/*
  Expected output:

  FirstName LastName
  Exercise 3.3
  Today's Date

  // Expected output
  The enter key was pressed
*/
// Variable
let eventKeyCode = 13

// code switch goes here...
switch (eventKeyCode){
  case 13:
    console.log('The enter key was pressed.')
    break;
  case 16:
    console.log('The shift key was pressed.')
    break;
  case 32:
    console.log('The space bar was pressed.')
    break;
  case 8:
    console.log('The backspace / delete key was pressed.')
    break;
  default:
    console.log('Unrecognized key pressed.')
    break;
}

// End of the program
