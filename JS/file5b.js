// ARROW FUNCTIONS

// function greet()
// {
//     console.log("Good Morning - This is Regular Function");
// }
// greet();

// const greet = () =>
// {
//     console.log("Good Morning - This is Arrow Function");
// };
// greet(); 
// NOTE: Hoisting is not allowed in arrow functions, however it is allowed in regular functions

// const add = (a,b) =>
// {
//     return a+b
// };
// const result = add(4,5);
// console.log(result);

const add = (...args) =>
{
    console.log(args);
}
add(1,2,3,4,5,6,7,8,9);

