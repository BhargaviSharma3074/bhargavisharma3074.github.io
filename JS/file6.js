// OBJECTS

const student = {
    name: "Bhargavi",
    age: 20,
};
console.log(student);
console.log(student.name);
console.log(student.age);
student.city = 'Ghaziabad';
console.log(student);
student.city = 'New Delhi'; // overwrites the previous one
console.log(student);
console.log(student["name"]); // same as student.name
delete student.city;
console.log(student);
const keys = Object.keys(student);
console.log(keys);
const values = Object.values(student);
console.log(values);