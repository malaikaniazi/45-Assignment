var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a Array of Countries and print its Orignal Order
var countriesToVisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Orignal Order:", countriesToVisit);
// Print the Array in Alphabetical order without modifying the Actual Array List
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// Show that the Array is still in its Orignal order
console.log("Still in Orignal Order:", countriesToVisit);
// Print the Array in Reversed Order without modifying the Actual Array List
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
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
