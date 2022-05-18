// Get references to the #Generate element
var generateBtn = document.querySelector("#generate");

// Assign page greeting function
let startPage = function() {
  window.alert("Welcome to the Password Generator. Please answer all the following prompts for your password.");
};

// Set global variables for character types to feed into atLeastOne function
var useLower = false;
var useUpper = false;
var useNumbers = false;
var useSpecials = false;

// Assign password length prompt function
let getLength = function() {
  var passwordLength = window.prompt("How long do you want your password to be? Please choose a number from 8 to 128.");
  
  //Conditional recursive function call
  if(passwordLength == "" || passwordLength == null || passwordLength < 8 || passwordLength > 128) {
    window.alert("Try again! Please enter a number from 8 to 128.");
    return getLength();
  }
  return passwordLength;
};

// Assign function for selecting password character types
let atLeastOne = function() {

  //Use lowercase pompt 
  useLower = window.confirm("Would you like to use lowercase letters? Press 'OK' for YES, 'Cancel' for NO. ");

  //Use uppercase prompt
  useUpper = window.confirm("Would you like to use uppercase letters? Press 'OK' for YES, 'Cancel' for NO.");

  //Use numbers prompt
  useNumbers = window.confirm("Would you like to use numbers? Press 'OK' for YES, 'Cancel' for NO.");

  //Use special characters prompt
  useSpecials = window.confirm("Would you like to use special characters? Press 'OK' for YES, 'Cancel' for NO.");

  if(!useLower && !useUpper && !useNumbers && !useSpecials) {
      window.alert("You must choose at least one character type to make a password.");
      return atLeastOne();
  }
};

// Asssign function for generating a random string 
//Building character list collaborator: Phil Callister
let generatePassword = function (length, lower, upper, numbers, specials) {
  var characters = '';
  
  if (lower === true) {
    characters += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (upper === true) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (numbers === true) {
    characters += '1234567890';
  }
  if (specials === true) {
    characters += '!@#$%^&*()<>,.?:';
  }
  //Citation: generatePassword part from programiz.com
  let password = '';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++){
    password += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return password;
};

let writePassword = function() {
  startPage();
  //Call getLength function and make result a local variable
  var length = getLength();
  atLeastOne();
  // Call generatePassword function and make result a local value
  var userPassword = generatePassword(length, useLower, useUpper, useNumbers, useSpecials);
  console.log(userPassword);
  // Write password to the #password input
  var passwordText = document.querySelector("#password");
  passwordText.value = userPassword;
};

// Event listener & generate button
generateBtn.addEventListener("click", writePassword);
