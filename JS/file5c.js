// CALLBACK FUNCTION

let f1 = () =>
{
    console.log("This is function f1");
};

let main = (x) =>
{
    x();
};

main(f1); //this will be executed first, which has a whole function as an arg and main(f1) has f1 function as arg, hence f1 is called
