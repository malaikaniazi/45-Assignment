var userNames = ["Bilal", "Talha", "Asad", "Admin", "Zain"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your Array in Empty WE need to find some users!");
}
else {
    // Using ForEach Loop on Array
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ",would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
