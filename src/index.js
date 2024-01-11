const date = new Date()
let userName = null
let userBirthYear = null
let userAge = null

function getUserName() {
    const promptString = String(window.prompt("Hello!, enter your name please.", "John Doe"))  
    userName = promptString
    userName ? console.log(`Hello, ${userName}!`) : userName = "Anonymous";
}

function getUserBirthYear() {
    const promptString = Number(window.prompt("Enter your birth year please."))
    userBirthYear = promptString
    if(!userBirthYear) { userBirthYear = date.getFullYear() }
}

function calculateAge() {
    const currentYear = date.getFullYear()
    const age = currentYear - userBirthYear
    userAge = age
    console.log(`You are ${userAge} years old!`)
}

getUserName
getUserBirthYear
calculateAge