var guestList = ["Sijawal", "Mariam", "Dua", "Usman"];
var dontCome = guestList[0];
console.log(dontCome, "Nahi Ahh skta");
guestList.splice(0, 1, "Amirr");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would u like to Dinner with me?")); });
