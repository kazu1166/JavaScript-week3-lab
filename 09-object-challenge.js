/**
 * # Object Challenge
 *
 * ### Step 1
 */

const library = [
  {
    title: "AAA",
    author: "Kazu",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "BBB",
    author: "John",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "CCC",
    author: "Tom",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// ### Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// ### Step 3
const { title: firstBook } = library[0];

// ### Step 4
const libraryJSON = JSON.stringify(library);

console.log(library);
console.log(firstBook);
console.log(libraryJSON);
