// Array of Current Users
let current_users = ["Khurram", "khubaib", "Salman", "Usama", "Hazim"];

// Array of New Users
let new_users = ["Malaika", "Khubaib", "Mano", "Usama", "Dua"];

// Loop through new_users to check for username avaibility
new_users.forEach(new_one_user => {

    // Making a Candition for username already exit and save in
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    // Print Different message using If-Else statements
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This Username ${new_one_user} is available`)
    }
    })

    