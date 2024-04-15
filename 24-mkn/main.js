// Define Variables
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
// Test for equality and inequality with strings
console.log("Is apple is equal to apple");
console.log(apple == "apple");
console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");
// Tests using Lowercase Function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIs Apple is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
// Numerical tests
// Equalto
console.log("\n Is ten is eqqual to twenty?");
console.log(ten == twenty);
// Not Equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
// Greater then 
console.log("\nIs ten is greater then zero?");
console.log(ten > 0);
// Less then
console.log("\nIs twenty is less then 10");
console.log(twenty < 10);
// Greater then or equal to
console.log("\nIs ten is greater then or equal to 5?");
console.log(ten >= 5);
// Less then or equal to
console.log("\n twenty is less then or equal to 10");
console.log(twenty <= 10);
// Tests using "and" & "or" Operators
// Using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater then 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater then 10");
console.log(twenty != 10 && twenty > 30);
// Using || (OR)
console.log("\n 20 is greater then 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater then 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
// Test Wheather an item is include in array
console.log("\nIs orange include in my Fruits array");
console.log(fruits.includes("orange"));
// Not Include
console.log("\nIs orange not include in my Fruits arrayy");
console.log(!fruits.includes("orange"));
