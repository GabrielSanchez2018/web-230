/*
Title: sanchez-assignment-6.4.js
Date: 12/16/2018
Author: Profesor Krasso
Modified by: Gabriel Sanchez
Description: Nested Object Literals
*/

/* header */
var header = require ('../sanchez-header.js');
console.log(header.display('Gabriel', 'Sanchez', 'Assignment 6.4'));
console.log('\n');

/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.

  FirstName LastName
  Assignment 6.4
  Today's Date

  Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).
*/

//Create an object literal ticket with a nested object literal person

var ticket = {
  id: 105,
  name: "Gabriel",
  // This function will give you the local time
  dateCreated: function (){
      var date = new Date().toLocaleDateString();
      return date
    },
  priority: "imediately",
//Nested object literal person
  person:{
    id:1,
    firstName:"Bob",
    lastName: "Jones",
    jobTitle: "Programmer I",

  }
};
console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated() + " and assigned to employee "
  + ticket.person.firstName +' '+ ticket.person.lastName + ' ('+ticket.person.jobTitle+ ')');
