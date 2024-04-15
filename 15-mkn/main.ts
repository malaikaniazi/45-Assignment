let guestList = ["Sijawal", "Mariam", "Dua", "Usman"];

let dontCome = guestList[0];

console.log(dontCome, "Nahi Ahh skta");

guestList.splice(0, 1, "Amirr");

guestList.forEach(guest => console.log(`Salam ${guest}, would u like to Dinner with me?`));
