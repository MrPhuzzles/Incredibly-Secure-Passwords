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

// Active changes to show password length when password length slider is adjusted.
const passLength = document.getElementById("passwordlength");
function change() {
  // Sets the text of range label to it's current value
  passLength.innerText = length.value;
}

//Function that allows user to change length by scrolling wheel on mouse
length.addEventListener("wheel", function (e) {
  if (e.deltaY < 0) {
    length.valueAsNumber += 1;
  } else {
    length.value -= 1;
  }
  change();
})

// Generate password function if criteria is valid!
const generatePassword = (length, characters) => {
  // If there are no characters to fulfil password, then this code doesn't run! 
  if (characters.length !== 0) {
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;
  }
  // Webpage reaction when user has an invalid selection for password
  else {
    alert("Please select at least 1 of the password criteria!");
    location.reload();
  }
};

// Add event listener to generate button, adds each criteria that is selected by user
generateBtn.addEventListener("click", () => {
  let characters = "";
  incLowerCase.checked ? (characters += lower) : "";
  incUpperCase.checked ? (characters += upper) : "";
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  passwordTxt.value = generatePassword(length.value, characters);
});
