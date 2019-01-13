/*
Title: sanchez-assignment-5.3.js
Date: 1/10/2019
Author: Profesor Krasso
Modified by: Gabriel Sanchez
Description: Object Collections 
*/

/* header */
var header = require ('../sanchez-header.js');
console.log(header.display('Gabriel', 'Sanchez', 'Assignment 5.3'));
console.log('\n');

/*
  Expected output:

  FirstName LastName
  Exercise 5.3
  Today's Date

  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/

// Program starts 
var composers = [
  {
    firstName: "Ludwing van",
    lastName: "Beethoven",
    genre: "Classical",
    rating: 8
  },
  {
    firstName: "Wolfgang AnaDeus",
    lastName: "Mozart",
    genre: "Classical",
    rating: 10
  },
  {
    firstName: "Johann Sebastian",
    lastName: "Bech",
    genre: "Classical",
    rating: 6
  },
  {
    firstName: "Joshep",
    lastName: "Haydan",
    genre: "Classical",
    rating: 6
  },
  {
    firstName: "Franz",
    lastName: "Schubert",
    genre: "Classical",
    rating: 5
  }
];
// forEach iteration
composers.forEach(function(composer){
  console.log(
    "Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating
  );
});

//END
