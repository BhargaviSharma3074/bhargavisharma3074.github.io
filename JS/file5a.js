// FUNCTION ARGUMENTS AND RETURN 

// function greet(student)
// {
//     console.log(`Hello ${student}!`);
// }
// greet("Bhargavi");

// function add(a,b)
// {
//     return a+b;
// }
// let sum = add(5,6);
// console.log(sum);

function add()
{
    console.log(arguments);
    console.log(arguments.length);
}
add(1,2,3,4,5,6,7,8,9);