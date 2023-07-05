var pass = ``;
var options = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + `abcdefghijklmnopqrstuvwxyz` + 
  `0123456789` + "\\!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var low = `abcdefghijklmnopqrstuvwxyz`;
var nu = `0123456789`;
var spe = "\\!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var choice = ``;


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");
  passwordText.value = ``; //trying to reset value in the password box
  choice = ``;
  var password = generatePassword();
  passwordText.value = password;
}

// drop "=== true" -- boolean value doesnt need to check for truthy
function longness() {
  var userLength = prompt (`Choose length of password between 8 and 128 characters`);
  if (userLength < 8) {
    alert(`Must choose between 8-128`)
    return
  } else if (userLength > 128) {
    alert(`Must choose between 8-128`)
    return
  } 
    upper()
    return userLength
}




function upper() {
  if (confirm (`Include uppercase letters?`) === true) {
    choice += up
  } 
  lower()
}

function lower() {
  if (confirm (`Include lowercase letters?`) === true) {
    choice += low
  } 
  numb()
}

function numb() {
  if (confirm (`Include numbers?`) === true) {
    choice += nu
  } 
  spec()
}

function spec() {
  if (confirm (`Include special characters?`) === true) {
    choice += spe
  }
}

//switch options for choice later when the functions are working
function generatePassword() {
  var userLength = longness()
  var passLength = parseInt(userLength)
  

  for (var i = 1; i <= passLength; i++) {
    var character = Math.floor(Math.random()
     * choice.length);  

    pass += choice.charAt(character);
  }
  
  return pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
