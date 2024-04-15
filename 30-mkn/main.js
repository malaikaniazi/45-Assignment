// Creating a Array
var userName = ["Bilal", "Talha", "Asad", "Zain", "Admin"];
// Using ForEach Loop on Array
userName.forEach(function (oneUser) {
    if (oneUser == "Admin") {
        console.log("Hello ".concat(oneUser, ",would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
