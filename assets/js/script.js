// Assignment code here
var passwordKey = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  symbol: "!@#$%^&*()-+=",
  number: "0123456789",
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// created generatePassword function
function generatePassword(){
  var passwordCharacter ="";

// prompt user to for the password length
var length = window.prompt("Enter a number from 8 to 128 for password lenght.");

// Prompt the user when the length is empty
if (length === "" || length === null){
  window.alert(" Please provide a valid answer!")
  return generatePassword ();
}

// prompt the user when they enter out of range number
else if (length < 8 || length > 128) {
  window.alert("Password needs to be between 8 and 128 characters long.");
  return generatePassword();
}
// prompt user for lower case characters
var lowercaseConfirm = window.confirm ("Would you like to use lowercase letter?") 

// password will include lowercase letter if the statement is true
if (lowercaseConfirm) {
passwordCharacter += passwordKey.lowercase
} 

// password will include uppercase letter if the statement is true
var uppercaseConfirm = window.confirm("Would you like to use uppercase letter?")
if (uppercaseConfirm){
passwordCharacter += passwordKey.uppercase
}

// password will include symbols if the statement is true
var symbolConfirm = window.confirm("Would you like to use symbols?")
if(symbolConfirm){
passwordCharacter += passwordKey.symbol
}

// password will include numbers if the statement is true
var numberConfirm = window.confirm ("Would you like to use numbers?")
if (numberConfirm){
passwordCharacter += passwordKey.number
}

// running loop to get password 
var passcode ="";
for (var i=0; i < length; i ++){
passcode += passwordCharacter [Math.floor(Math.random() * passwordCharacter.length)]
}
return passcode;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
