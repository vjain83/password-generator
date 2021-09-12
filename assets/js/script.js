// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// function to get passwors length
function generatePassword() {

  var passwordLength = window.prompt("Give the length of the password between 8 to 128 Characters!");
  var lengthConfirm = parseInt(passwordLength);

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Enter a Valid number of Character");

    return generatePassword();
  }


  // Array formation to generate random password
  var criteria = [];
  var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseChar = "abcdefghijklmanopqrstuvwxyz";
  var numberChar = "0123456789";
  var specialChar = "*&^%$#@!?><{}";

  // loop for all character set
  var upperCaseConfirm = window.confirm("Do You want your password to include uppercase?");
  if (upperCaseConfirm === true) {
    for (var i = 0; i < upperCaseChar.length; i++) {
      criteria.push(upperCaseChar[i]);

    }
  }

  var lowerCaseConfirm = window.confirm("Do You want your password to include lowercase?");
  if (lowerCaseConfirm === true) {
    for (var i = 0; i < lowerCaseChar.length; i++) {
      criteria.push(lowerCaseChar[i]);
    }
  }

  var numberConfirm = window.confirm("Do You want your password to include Numbers?");
  if (numberConfirm === true) {
    for (var i = 0; i < numberChar.length; i++) {
      criteria.push(numberChar[i]);
    }

  }

  var specialConfirm = window.confirm("Do You want your password to include special characters?");
  if (specialConfirm === true) {
    for (var i = 0; i < specialChar.length; i++) {
      criteria.push(specialChar[i]);

    }
  }
  var randomPassword = "";
  for (var i = 0; i < lengthConfirm; i++) {
    criteria[
      Math.floor(Math.random() * criteria.length)];
    randomPassword +=
      criteria[
      Math.floor(Math.random() * criteria.length)
      ];

  }

  return randomPassword;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

