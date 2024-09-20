// ## 01.
// For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// Find the average marks of the entire class.
const scores = [85, 97, 44, 37, 76, 60];

let sum = 0;
for (let i = 0; i < scores.length; i++) {
  sum += scores[i];
}

const avg = sum / scores.length;

console.log(avg);

// ## 02.
// For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after applying offer
const items = [250, 645, 300, 900, 50];

const discountedItems = items.map((x) => x * 0.9);

console.log(discountedItems);

// ## 03.
// Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”
const companies = [
  "Bloomberg",
  "Microsoft",
  "Uber",
  "Google",
  "IBM",
  "Netflix",
];

// a.	Remove the first company from the array
const modifiedCompanies = companies.shift();

// b.	Remove Uber & Add Ola in its place
modifiedCompanies.splice(1, 1, "Ola");

// c.	Add Amazon at the end
modifiedCompanies.push("Amazon");

console.log(modifiedCompanies);
