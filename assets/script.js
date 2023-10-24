// Assignment Code
var generateBtn = document.querySelector("#generate");

// All password criteria variables
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numbers = "0123456789";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var passwordLength = window.prompt("How many characters would you like your password to contain?");
  
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Your password must be between 8 and 128 characters.");
    var passwordLength = prompt("How many characters would you like your password to contain?");


  }
}