/*
Title: sanchez-assignment-6.3.js
Date: 12/16/2018
Author: Profesor Krasso
Modified by: Gabriel Sanchez
Description: Object Literals
*/
/*
  Expected output:

  FirstName LastName
  Exercise 6.3
  Today's Date

  {id: 101, name: Help Desk Support, requester: Bob Jones}
*/


/* header */
var header = require ('../sanchez-header.js');
console.log(header.display('Gabriel', 'Sanchez', 'Assignment 6.3'));
console.log('\n');

//ticket Object
var ticket = {
  id:101,
  get idNumber(){
    return this.id;
  },
  // setter method lets you change the id value.
  set idNumber(val){
    this.idNumber = val;
  },

  fullName: "Help Desk Support",
  get name(){
    return this.fullName;
  },
  // setter method lets you change the fullName value
  set name(val){
    return this.name = val;
  },

  requestorName: "Bob Jones",
  get requestor(){
    return this.requestorName;
  },
  //setter method lets you change the resquestorName value
  set requestor(val){
    return this.requestor = val;
  }
};
// we can change the vaules here, calling the object name and the desired value.
ticket.id = 101;
ticket.fullName = 'Help Desk Support';
ticket.requestorName = 'Bob Jones';
// Program output
console.log('{' + "Id: " + ticket.id + ", Name: " + ticket.fullName + ", requester: " + ticket.requestorName + '}' );
