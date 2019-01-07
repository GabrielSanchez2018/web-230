/*
Title: sanchez-assignment-4.3.js
Date: 1/2/2019
Author: Profesor Krasso
Modified by: Gabriel Sanchez
Description:  Filtering
*/

/*
  Expected output:

  FirstName LastName
  Exercise 4.3
  Today's Date

  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus

  -- SELECTED VALUE --
  Motorcycle

  -- SELECTED VALUE --
  Bus
*/



/* header */
var header = require ('../sanchez-header.js');
console.log(header.display('Gabriel', 'Sanchez', 'Assignment 4.3'));
console.log('\n');

// String Array
var vehicles = ["Car", "Truck", "Motocycle", "Airplane", "Bus"];

// Function
function getValue(arr, val){
  for ( var k = 0; k < arr.length; k++) {
    if (arr[k]===val)
      console.log(arr[k]);
  }
}
// Display array Items 
console.log(" --DISPLAY ARRAY ITEMS-- ");
for( x = 0; x < vehicles.length; x++){
      console.log(vehicles[x]);
}
// NEW LINE 
console.log("");
console.log("--  SELECTED VALUE -- ");
getValue(vehicles, "Motocycle");
// NEW LINE 
console.log("");
console.log(" -- SELECTED VALUE --" );
getValue(vehicles, "Bus");

//END OF THE PROGRAM 

