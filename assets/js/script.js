// Assignment code here

// Variable Declerations
const generateBtn = document.querySelector("#generate");
const passwordTxt = document.getElementById("password");
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";


// Add event listener to generate button, adds each criteria that is selected by user
generateBtn.addEventListener("click", writePassword);
