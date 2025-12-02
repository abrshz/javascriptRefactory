
// 1

let fruit = 'Banana';

console.log("My favorite fruit is " + fruit + ". It's sweet and gives energy.");


// 2

let schoolName = "Refactory";
let programmingLanguage = "JavaScript";

console.log(`Welcome to ${schoolName} online class. This week we will going to learn about ${programmingLanguage}`);


// 3

let numbers = "45";

console.log(typeof Number(numbers) , Number(numbers) );

let isPaid = "true";

console.log(typeof Boolean(isPaid) , Boolean(isPaid) );

let price = 68903;

console.log(typeof String(price) , String(price) );


// 4

let message = "   Apperciate you!   ";

console.log(message.toLocaleUpperCase());

console.log(message.toLocaleLowerCase());

console.log(message.trim());

console.log(message.split("  "));

console.log(message.includes('!'));

console.log(message.replace('Apperciate', 'Thank'));


// 5

let firstName = "nIKE";
let age = 0;
let fruits = "";

let firstLetter = firstName.charAt(0).toUpperCase();

let restOfName = firstName.slice(1);

let smallAlphabet = restOfName.toLocaleLowerCase();

let properName = firstLetter + smallAlphabet;

console.log(properName);

console.log(`Welcome to KGL ${properName}`);




