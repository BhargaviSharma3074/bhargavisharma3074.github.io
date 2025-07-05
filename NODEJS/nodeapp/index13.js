import dotenv from 'dotenv';

dotenv.config();
const dbuser = encodeURIComponent(process.env.DBUSER);  // encodeURIcomponent is used to be on the safer side, for eg a password has special char
const dbpass = encodeURIComponent(process.env.DBPASS); //eURIc. reads the data as it is, 
console.log(dbuser, dbpass);
