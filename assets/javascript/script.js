let generateBtn = document.querySelector("#generate"); // Selects the button with the id "generate"

function generatePassword() {
    let passwordLength = prompt("How many characters would you like your password to be?"); // Prompts the user for the length of the password`
    if (passwordLength < 8 || passwordLength > 128) { // If the password length is less than 8 or greater than 128, alert the user and return
        alert("Password must be between 8 and 128 characters."); // Alerts the user that the password must be between 8 and 128 characters
        return; // Returns the function
    }
    let lowerCase = confirm("Would you like to include lowercase letters?"); // Prompts the user if they would like to include lowercase letters
    let upperCase = confirm("Would you like to include uppercase letters?"); // Prompts the user if they would like to include uppercase letters
    let numbers = confirm("Would you like to include numbers?"); // Prompts the user if they would like to include numbers
    let specialCharacters = confirm("Would you like to include special characters?"); // Prompts the user if they would like to include special characters
    if (!lowerCase && !upperCase && !numbers && !specialCharacters) { // If the user does not select any character types, alert the user and return
        alert("You must select at least one character type."); // Alerts the user that they must select at least one character type
        return;
    }
    let lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz"; // Defines a string of lowercase characters
    let upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Defines a string of uppercase characters
    let numberCharacters = "0123456789"; // Defines a string of numbers
    let specialCharactersList = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; // Defines a string of special characters
    let characters = ""; // Defines an empty string
    if (lowerCase) {
        characters += lowerCaseCharacters; // Adds the lowercase characters to the characters string
    }
    if (upperCase) {
        characters += upperCaseCharacters; // Adds the uppercase characters to the characters string
    }
    if (numbers) {
        characters += numberCharacters; // Adds the numbers to the characters string
    }
    if (specialCharacters) {
        characters += specialCharactersList; // Adds the special characters to the characters string
    }
    let password = ""; 
    for (let i = 0; i < passwordLength; i++) { // Loops through the password length
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password; // Returns the password
}

function writePassword() { // Function to write the password to the page
    let password = generatePassword(); // Calls the generatePassword function and stores the result in the password variable
    let passwordText = document.querySelector("#password"); // Selects the textarea with the id "password"
    passwordText.value = password; // Sets the value of the textarea to the password
}

generateBtn.addEventListener("click", writePassword); // Adds an event listener to the generate button that calls the writePassword function when clicked