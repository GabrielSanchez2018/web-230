/*
Title: sanchez-assignment-5.2.js
Date: 1/10/2019
Author: Profesor Krasso
Modified by: Gabriel Sanchez
Description: ES5 Built-In Functions 
*/

/* header */
var header = require ('../sanchez-header.js');
console.log(header.display('Gabriel', 'Sanchez', 'Assignment 5.2'));
console.log('\n');

/*
  Expected output:

  FirstName LastName
  Exercise 5.2
  Today's Date

  Oysters
  Shrimp
  Steak
  Tacos
  Sushi

*/

//Program Starts 
var favFoods = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"];


favFoods.forEach(function(favFoods){
  console.log(favFoods);
});

//End 