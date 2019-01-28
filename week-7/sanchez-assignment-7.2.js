/*
Title: sanchez-assignment-7.2.js
Date: 1/25/2019
Author: Profesor Krasso
Modified by: Gabriel Sanchez
Description: Contructor funtions 
*/

/* header */
var header = require ('../sanchez-header.js');
console.log(header.display('Gabriel', 'Sanchez', 'Assignment 7.2'));
console.log('\n');

/*
  Expected output:

  FirstName LastName
  Exercise 7.2
  Today's Date

  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
*/
// Constructor Object. 
function employee(id, firstName, lastName, title){
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}
// array with five employees info
var fiveEmployees = [
  new employee( "1","Thomas", "Edison", "Software Engenier"),
  new employee( "2","Benjamin", "Franklin",  "Programmer"),
  new employee( "3","Nikola", "Tesla", "Project Manager"),
  new employee( "4", "Charles", "Babbage", "Product Manager"),
  new employee( "5", "Alexander", "Bell", "Business Analyst"),
];
// loop the array FiveEmployees using forEach()
fiveEmployees.forEach(function(i,index){
  console.log((index +1),i.firstName,i.lastName,i.title)
})