// Array of Current Users
var current_users = ["Khurram", "khubaib", "Salman", "Usama", "Hazim"];
// Array of New Users
var new_users = ["Malaika", "Khubaib", "Mano", "Usama", "Dua"];
// Loop through new_users to check for username avaibility
new_users.forEach(function (new_one_user) {
    // Making a Candition for username already exit and save in
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print Different message using If-Else statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
