const student = {
  name : 'Johnson Saka',
  age : 21,
  courses : ['AI' , 'Discrete Maths' , 'Machine Learning' , 'Computer Networks' , 'Operating Systems'],
  address : {
    city : 'Accra',
    country : 'Ghana'
  }
}

// Add a new property GPA to the object and assign it a value.

student.GPA = 3.5;
//console.log(student);

//Update the age property to a new value.

student.age =  26;



// Add a new course to the courses array.

student.courses[5] = 'Data Structures';
//console.log(student);

//Delete the address property from the object.

delete student.address;
console.log(student);