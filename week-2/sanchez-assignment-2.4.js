/*



Title: sanchez-assignment-2.4.js

Date: 11/29/2018

Author: Profesor Krasso

Modified by: Gabriel Sanchez

Description: Assignment 2.4

*/



// Header

var header = require ('../sanchez-header');

console.log(header.display('Gabriel', 'Sanchez', 'Assingment 2.4'));

console.log('\n');





/* Create a function called fullName with two parameters

(first and last name) and a return the two parameters as one string.

*/

function fullName(fisrtName, lastName){

    var fisrtName = 'Gabriel';

    var lastName = 'Sanchez';

    return fisrtName +''+ lastName



}



/* Create a function called dateWriter with three parameters (year, month, and day)

 and return a new date using the passed-in values

 */

function dateWriter(year, month, day){

    var d = new Date();

    var year = d.getFullYear();

    var month = d.getMonth();

    var day = d.getDay();



    return ''+ year + '-'+ month +'-'+ day



}

/* Create a function called formatNumber with two parameters (number and numOfFixedPositions)

and return the number with the number of fixed positions you specified in the second parameter.

*/

let n = 33.99;

let place = 1;



function formatNumber(number, numOfFixedPositions){

    return number.toFixed(numOfFixedPositions)

}

/* Create a function called convertToInt with one string parameter.

 Parse the string parameter and return the value as an integer.

 */



function convertToInt(age){

    var age = parseInt("27");

    return age

}





/* Create a function called convertToFloat with one string parameter.

Parse the string parameter and return the value as a float.

 */

function convertTofloat(age){

    var age = parseFloat("100.55");

    return age

}


// call the functions 


console.log ('Hello My name is ' +''+fullName()+ '!')

console.log ( "Today's date is " + "" + dateWriter()+ ' and the current temperature is ' + formatNumber(n, place) + ' degress');

console.log ( 'I am ' + convertToInt() + ' years old and my saving account goal is ' + convertTofloat() + ' dollars');

// end of the program!
