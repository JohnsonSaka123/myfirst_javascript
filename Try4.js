const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
  { name: "Dave", age: 35 }
];

// Sort the array by age in ascending order.
// sort(comparator)

let answer = people.sort((a,b) => a.age - b.age);

//console.log(answer);

// Filter the array to get only people who are over 30 years old.

let Mypeople = people.filter(person => person.age > 30) ;

//console.log(Mypeople);

// Create a new array that contains just the names of the people in the array.

let NamesOfPeople = people.filter(person => person.name);
console.log(NamesOfPeople);