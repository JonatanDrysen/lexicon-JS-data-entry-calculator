const date = new Date()
let userName = null
let userBirthYear = null
let userAge = null

let nr1
let nr2

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

function calculateUserAge() {
    const currentYear = date.getFullYear()
    const age = currentYear - userBirthYear
    userAge = age
    console.log(`You are ${userAge} years old!`)
}

function getTwoNumbers() {
    nr1 = Number(window.prompt("Enter the first number please."))
    nr2 = Number(window.prompt("Enter the second number please."))
}

function calculateTwoNumbers() {
    const sum = nr1 + nr2
    const difference = nr1 - nr2
    const product = nr1 * nr2
    const quotient = nr1 / nr2
    
    console.log(
        `Sum: ${sum}.`,
        `difference: ${difference}.`,
        `product: ${product}.`,
        `quotient: ${quotient}.`,
    )

    window.alert("Calculations are done! Check console.")
}
