/*
Title: sanchez-assignment-6.2.js
Date: 1/16/2019
Author: Profesor Krasso
Modified by: Gabriel Sanchez
Description: Exception Handiling
*/

/* header */
var header = require ('../sanchez-header.js');
console.log(header.display('Gabriel', 'Sanchez', 'Assignment 6.2'));
console.log('\n');

/*
  Expected output:

  FirstName LastName
  Exercise 6.2
  Today's Date

  Catch clause: <your custom message goes here>
  Finally clause reached...
*/
// Doritos cost 3 dolars, if they insert 2, a message will apear stating "No suficient ammount"
try{

    var doritos = 3;

    var pay = 2;

    var equeal = doritos - pay;
if (equeal < doritos) throw "No suficient ammount";

    console.log(equeal);


} catch(err){
    console.log("Catch clause:" + err);

} finally {
    console.log("Finally clause reached...")
}
// Program ends
