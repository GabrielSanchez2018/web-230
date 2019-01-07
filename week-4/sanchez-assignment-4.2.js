/*
Title: sanchez-assignment-4.2.js
Date: 1/2/2019
Author: Profesor Krasso
Modified by: Gabriel Sanchez
Description:  Arrays
*/
/*
  Expected output:

  FirstName LastName
  Exercise 4.2
  Today's Date

  Apple
  Orange
  Banana
  Mango
  Pear
*/

/* header */
var header = require ('../sanchez-header.js');
console.log(header.display('Gabriel', 'Sanchez', 'Assignment 4.2'));
console.log('\n');

// string array
var Fruits = ['Apple', 'Orange', 'Banana', 'Mango', 'Pear'];

//functions
function getFruit(arr){
  for (var i = 0; i < arr.length; i++){
    console.log(arr[i])
  }
}
//Output from function getFruit
getFruit(Fruits)

//End Program
