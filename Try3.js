const student = {
  name: "John",
  age: 20,
  subjects: ["Math", "Science", "English"],
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA"
  }
};

// Add a new subject "History" to the subjects array.

student.subjects.push("History");
//console.log(student.subjects);

//  Change the age property to 21.
student.age = 21;


//Update the city in the address object to "Los Angeles".
student.address.city = "Los Angeles";
//console.log(student.address);

//Add a new property grades to the student object with the following structure:

student.grades = {
  Math : 85,
  Science : 90,
  English : 92,
  History : 88
}

console.log(student);