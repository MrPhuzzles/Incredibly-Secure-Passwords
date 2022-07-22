// Assignment code here

// Variable Declerations
const generateBtn = document.querySelector("#generate");
const passwordTxt = document.getElementById("password");
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const length = document.getElementById("length");
const incNumbers = document.getElementById("numbers");
const incLowerCase = document.getElementById("lowercase");
const incUpperCase = document.getElementById("uppercase");
const incSymbols = document.getElementById("symbols");

// Add event listener to generate button, adds each criteria that is selected by user
generateBtn.addEventListener("click", () => {
  let characters = "";
  incLowerCase.checked ? (characters += lower) : "";
  incUpperCase.checked ? (characters += upper) : "";
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  passwordTxt.value = generatePassword(length.value, characters);
});
