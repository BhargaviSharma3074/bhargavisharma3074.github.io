// PROMISE

// const f1 = () => {
//     return 5;
// };
// const f2 = (x) => {
//     console.log(x+6);
// };
// const n = f1();
// f2(n);

// const f1 = () => {
//     setTimeout(() => {
//         return 5;
//     }, 1000);
// };
// const f2 = (x) => {
//     console.log(x+6);
// };
// const n = f1();
// f2(n);

// const f1 = () => {
//     return new Promise((resolve,reject) => {
//         resolve(5);
//     });
// };
// const f2 = (x) => {
//     console.log(x+6);
// };
// f1().then((n) => f2(n));

// const f1 = () => {
//     return new Promise((resolve,reject) => {
//         // resolve(5);
//         reject("Something went wrong!")
//     });
// };
// const f2 = (x) => {
//     console.log(x+6);
// };
// f1()
// .then((n) => f2(n))
// .catch((err) => console.log(err));

// const n = f1();
// f2(n);

// const f1 = (a) => {
//     return new Promise((resolve,reject) => {
//         if(a<0) reject("Invalid input!");
//         else resolve(a);
//         resolve(a);
//         // reject("Something went wrong!")
//     });
// };
// const f2 = (x) => {
//     console.log(x+6);
// };
// f1(-5).then((n) => f2(n)).catch((err) => console.log(err));


// **********fetch returns promise***************
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => {
//     data.forEach(value => {
//         console.log(value.name,`:`, value.email);
//         console.log(`\n`);
//     });
//   })
//   .catch((err) => console.log(err));

const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");  // await is used where promises are returned
    const data = await res.json();
    data.forEach((value) => {
        console.log(value.name);
    });
};
fetchData();