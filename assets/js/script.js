// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// function to get password criteria
function selectCriteria() {
  var criteria = "";
  var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseChar = "abcdefghijklmanopqrstuvwxyz";
  var numberChar = "0123456789";
  var specialChar = "*&^%$#@!?><{}";

  var upperCaseConfirm = window.confirm("Do You want your password to include uppercase?");
  if (upperCaseConfirm === true) {
    criteria += upperCaseChar;
  }

  var lowerCaseConfirm = window.confirm("Do You want your password to include lowercase?");
  if (lowerCaseConfirm === true) {
    criteria += lowerCaseChar;
  }

  var numberConfirm = window.confirm("Do You want your password to include Numbers?");
  if (numberConfirm === true) {
    criteria += numberChar;
  }

  var specialConfirm = window.confirm("Do You want your password to include special characters?");
  if (specialConfirm === true) {
    criteria += specialChar;
  }

  // check when none of the criteria is selected
  if (!upperCaseConfirm && !lowerCaseConfirm && !numberConfirm && !specialConfirm) {
    alert("You need to Select atleast one criteria for the Password!");
    return selectCriteria();
  }

  return criteria;
}
// function the get password length
function getPasswordLength() {
  var passwordLength = window.prompt("Give the length of the password between 8 to 128 Characters!");

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Enter a Valid number of Character");
    return getPasswordLength();
  }
  var lengthConfirm = parseInt(passwordLength);

  return lengthConfirm;
}
// Function to generate password
function generatePassword() {
  var passwordLength = getPasswordLength();
  var criteria = selectCriteria();

  var randomPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * criteria.length);
    randomPassword += criteria[index];
  }

  return randomPassword;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
