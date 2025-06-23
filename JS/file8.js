// ARRAY METHODS

const points = [2, 5, 4, 3, 7, 4, 8];

// points.forEach(value => {
//     console.log(value);
// });

// points.forEach((value, index) => {
//     console.log(value, index);
// });

// points.forEach((value, index, arr) => {
//     console.log(value, index, arr);
// });

// points.forEach((a, b, c) => {
//     console.log(a);
// });

// const newArr = points.map((value, index) => {
//     return value;
// })

// points.map((value, index) => {
//     console.log(index);
// });

// const newArr = points.map((value, index) => {
//     return (value+=5);
// });
// console.log(newArr);

// const newArr = points.map((value, index) => (value+=5)); //shorter way to write

// const newArr = points.filter((value) => value>2);
// console.log(newArr);

// const newArr = points.find((value) => value>2);
// console.log(newArr);

// const result = points.find((value) => value===4);
// console.log(result);

// const result = points.reduce((sum, value) => {
//     return sum + value;
// }, 0);
// console.log(result);

const newArr = points.map((value) => value);
console.log(newArr);