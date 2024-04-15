// Making a Array of Countries and print its Orignal Order
let countriesToVisit: String[] = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Orignal Order:", countriesToVisit);

// Print the Array in Alphabetical order without modifying the Actual Array List
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// Show that the Array is still in its Orignal order
console.log("Still in Orignal Order:", countriesToVisit);

// Print the Array in Reversed Order without modifying the Actual Array List
console.log("Reverse Order:", [...countriesToVisit].reverse());

// Show that the Array is still in its Orignal order
console.log("Still in Orignal Order:", countriesToVisit);

// We have Change the Orignal Array Order Now
console.log("Orignal Array Reversed:", countriesToVisit.reverse());

// Print the Array to show that its back to its orignal order
console.log("Back to Orignal Order:", countriesToVisit.reverse());

// Print the Array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

// We have Changed again the Orignal Array Order Now in reverse order again
console.log("Orignal Array Reversed Again:", countriesToVisit.reverse());