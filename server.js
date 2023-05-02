require("dotenv").config();

console.log(`The name ${process.env.MY_NAME} will be used to connect to the third party API`);
console.log(`The server will connect to the city "${process.env.MY_CITY}" and the password ${process.env.MY_LANGUAGE}`);
