// Creating a Array
let userName = ["Bilal", "Talha", "Asad", "Zain", "Admin"];

// Using ForEach Loop on Array
userName.forEach(oneUser =>{
    if(oneUser == "Admin"){
         console.log(`Hello ${oneUser},would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})