// Creating a Guest List Array
let guestList = ["Malaika", "Khalid", "Sijawal", "Dua"];

// Making variable for those guest who cant come
let dontCome = guestList[0];

// print the name of guest who cant come
console.log(dontCome, "Naii Ahhh Sakty han");

// Add or Remove Values from Guest List Array
guestList.splice(0, 1, "Amirr");

// Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner.");

// Adding a new guest at starting index of array
guestList.unshift("Ahmed");

// Adding a new guest at ending index of array
guestList.push("Zain");

// Get a middle index of our guest list aaray
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Usama");

// Print message of Updated List
console.log("Updated List of our Guests");

// Sending a invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));
