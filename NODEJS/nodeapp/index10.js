import jwt from 'jsonwebtoken';

const SECRET = "sometext";
const user = {
    name: "John",
    email: "john@gmail.com",
    role: "admin"
}

const token = jwt.sign(user, SECRET, {expiresIn: "1h"});
console.log(token);

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImVtYWlsIjoiam9obkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NTE2MDQ5NDQsImV4cCI6MTc1MTYwODU0NH0.JcwIzcXZaiwHiRONGZYOwfatSn4ikMT6v3tPrYrCS58";
const decoded = jwt.verify(token, SECRET);
console.log(decoded);