"use strict";
// Making a Function
function make_shirt(size = "Large", printMessage = "I Love TypeScript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`);
}
// Calling a Function with by-defualt values
make_shirt();
// Calling a Function now with Medium size and default message
make_shirt("Medium");
// Calling a Function now with Small size and Different print Message
make_shirt("Small", "I Love JavaScript");
