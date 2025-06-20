// CALLBACK FUNCTION

// let f1 = () =>
// {
//     console.log("This is function f1");
// };

// let main = (x) =>
// {
//     x();
// };

// main(f1); //this will be executed first, which has a whole function as an arg and main(f1) has f1 function as arg, hence f1 is called

// let main = (x) =>
// {
//     x();
// };
// main(() => {
//     console.log("Hello World");
// });

function f1(x) 
{
    console.log(x);
};
const main = () => f1(5);
main();
