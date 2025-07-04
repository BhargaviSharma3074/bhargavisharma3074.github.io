import bcrypt from 'bcrypt';

// const pwd = "pass1234";
// const hashedpwd = await bcrypt.hash(pwd,10);
// console.log(hashedpwd);

const check = await bcrypt.compare("pass1234","$2b$10$wY/AjKsaYTEBxHl/3dOUL.Ie8hcUKJjYe6.iZOQvG6uXF/JswzrVK");
console.log(check);