let userName = null
let birthYear = null

function getUserName() {
    const promptString = String(window.prompt("Hello!, enter your name please.", "John Doe"))  
    userName = promptString
    userName ? console.log(`Hello, ${userName}!`) : userName = "Anonymous";
}

function getBirthYear() {
    const promptString = Number(window.prompt("Enter your birth year please."))
    birthYear = promptString
    if(!birthYear) { birthYear = 2024 }
}

getUserName()
getBirthYear()
