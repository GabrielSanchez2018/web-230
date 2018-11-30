/*

Title: Assignment 1.5
Author: Gabriel Sanchez
Date: 11/30/2018
Modified by: ----
Description: This program demostrates the use 
of JavaScript types, values, and variables in a
application. 

*/

// Header 
var myFirstName = "Gabriel";
var myLastName = "Sanchez";
var todaysDate = new Date().toLocaleDateString();
var assignmentNum = "Assignment 1.5";

var programHeader = "\n" + myFirstName + " " + myLastName + "\n"
    + assignmentNum + "\nDate: " + todaysDate;

console.log(programHeader);
console.log("\n"); 

// Program starts...

// Employe 1 Michael 
var fi_firstName= "Michael";
var fi_lastName = "Avalos";
var fi_address = "4126 S st";
var fi_payRate = "15";
var fi_hireDate = "1/03/2011";
var fi_todaysDate = new Date().toLocaleDateString();

// Employee 2 Omar 
var se_firstName= "Omar";
var se_lastName = "Urias";
var se_address = "1558 E st";
var se_payRate = "45";
var se_hireDate = "8/03/2011";
var se_todaysDate = new Date().toLocaleDateString();

// Employee 3 Rashed 
var th_firstName= "Rashed";
var th_lastName = "Zeus";
var th_address = "1548 t st";
var th_payRate = "15";
var th_hireDate = "3/03/2016";
var th_todaysDate = new Date().toLocaleDateString();

// Employee 4 
var fo_firstName = "Rafael";
var fo_lastName = "Varela";
var fo_address = "4525 Ohern st";
var fo_payRate = "30";
var fo_hireDate = "1/15/1998";
var fo_todaysDate = new Date().toLocaleDateString();

// Employee  5
var fi_firstName = "Angel";
var fi_lastName = "Sanchez";
var fi_address = "4735 Z st";
var fi_payRate = "11";
var fi_hireDate = "1/15/2018";
var fi_todaysDate = new Date().toLocaleDateString();




// Employe 1 Michael 

var michael = "\n" + "First Name:" + fi_firstName + "\n" + "Last Name:" +
fi_lastName + '\n' + "Address:" + fi_address + '\n' + "Pay Rate:" + fi_payRate +
'\n' + "Hire Date:" + fi_hireDate + '\n' + "Date:" + fi_todaysDate;

// Employee 2 Omar

var Omar = "\n" + "First Name:" + se_firstName + "\n" + "Last Name:" +
se_lastName + '\n' + "Address:" + se_address + '\n' + "Pay Rate:" + se_payRate +
'\n' + "Hire Date:" + se_hireDate + '\n' + "Date:" + se_todaysDate;

// Employee 3 Rashed

var Rashed = "\n" + "First Name:" + th_firstName + "\n" + "Last Name:" +
th_lastName + '\n' + "Address:" + th_address + '\n' + "Pay Rate:" + th_payRate +
'\n' + "Hire Date:" + th_hireDate + '\n' + "Date:" + th_todaysDate;

// Employee 4 Rafael 

var Rafael = "\n" + "First Name:" + fo_firstName + "\n" + "Last Name:" +
fo_lastName + '\n' + "Address:" + fo_address + '\n' + "Pay Rate:" + fo_payRate +
'\n' + "Hire Date:" + fo_hireDate + '\n' + "Date:" + fo_todaysDate;

// Employee 5 Angel

var Angel = "\n" + "First Name:" + fi_firstName + "\n" + "Last Name:" +
fi_lastName + '\n' + "Address:" + fi_address + '\n' + "Pay Rate:" + fi_payRate +
'\n' + "Hire Date:" + fi_hireDate + '\n' + "Date:" + fi_todaysDate;




// Outcome
console.log( michael, '\n'+ Omar, '\n' + Rashed, '\n' + Rafael, '\n' + Angel);
console.log("\n");

// Program ends..