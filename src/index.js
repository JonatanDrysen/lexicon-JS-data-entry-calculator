let userName = null

function getUserName() {
    const promptString = window.prompt("Hello!, enter your name please.", "John Doe")  
    userName = promptString
    userName ? console.log(`Hello, ${userName}!`) : userName = "Anonymous"
}

getUserName()
