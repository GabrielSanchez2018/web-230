/*
Title: sanchez-assignment-5.4.js
Date: 1/10/2019
Author: Profesor Krasso
Modified by: Gabriel Sanchez
Description: Filtering/Reducing Complex Data Structures
*/

/* header */
var header = require ('../sanchez-header.js');
console.log(header.display('Gabriel', 'Sanchez', 'Assignment 5.4'));
console.log('\n');

// Array crated in exercise 5.3
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


// Composers by rating
console.log("--COMPOSERS BY RATING--");
let rating = composers.map((composer) =>{
  return composer.rating
});
//Composer by rating Output
index = 1
rating.forEach((rating) =>{
  console.log(index + ". " + rating)
  index++
});
// Composers by genre
console.log("");
console.log("--COMPOSERS BY GENRE--");
let genre = composers.map((composer) =>{
  return composer.genre
});
//composer by genre output 
index = 1
genre.forEach((genre)=>{
  console.log(index + ". " + genre)
  index++
});

// forEach() iteration
console.log("");
console.log("--ALL--");
composers.forEach(function(composer){
  console.log(
      "First Name: " + composer.firstName + ", Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating
  );
});

//END