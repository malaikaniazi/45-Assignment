// Creating a Guest List Array
var guestList = ["Malaika", "Khalid", "Sijawal", "Dua"];
// Making variable for those guest who cant come
var dontCome = guestList[0];
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
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Usama");
// Print message of Updated List
console.log("Updated List of our Guests");
// Sending a invitation message to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me")); });
// Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me");
// Using while-loop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
// Sending a innvitations to the last two guests on the list
console.log("Invitation to the last 2 Guests");
guestList.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", you are still invited to dinner")); });
// Removing last two guests from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
