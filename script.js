// Assignment Code -- button variable
var generateBtn = document.querySelector("#generate");

//global variables

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacter = "!@#$%^&*";
var number = "0123456789"

// Function to display prompts and alerts to generate password
function generatePassword() {
  var savedPassword = ""
  var passwordLength = window.prompt("choose a password length between 8 and 128 characters")

  if (passwordLength >= 8 && passwordLength <= 128) {
    var isSpecialCharacter = window.confirm("Do you want to include special character in your password");
    var isNumber = window.confirm("Do you want to include numbers in your password");
    var isLowerCase = window.confirm("Do you want to include lowercase characters in your password");
    var isUpperCase = window.confirm("Do you want to include uppercase character in your password");

    for (let i = 0; i < passwordLength; i++) {

      if (isSpecialCharacter === true && savedPassword.length < passwordLength) {
        var randomIndex = Math.floor(Math.random() * specialCharacter.length)
        savedPassword = savedPassword + specialCharacter[randomIndex]
      }
      if (isNumber === true && savedPassword.length < passwordLength) {
        var randomIndex = Math.floor(Math.random() * number.length)
        savedPassword = savedPassword + number[randomIndex]
      }

      if (isLowerCase === true && savedPassword.length < passwordLength) {
        var randomIndex = Math.floor(Math.random() * lowerCase.length)
        savedPassword = savedPassword + lowerCase[randomIndex]
      }

      if (isUpperCase === true && savedPassword.length < passwordLength) {
        var randomIndex = Math.floor(Math.random() * upperCase.length)
        savedPassword = savedPassword + upperCase[randomIndex]
      }

      if (isSpecialCharacter === false && isNumber === false && isLowerCase === false && isUpperCase === false) {
        window.alert("You must pick at least one character type.")
        return ""
      }
    }

  } else {
    window.alert("Sorry, your password does not meet the criteria.")
  }

  return savedPassword

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //return the final password
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);