// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //function to generate the variable
  function generatePassword() {
    //sets and resets variable for password string
    var passwordString = ""
    var combined = ""
    // sets and refreshes the character sets
    var lowerSet = "abcdefghijklmnopqrstuvwxyz";
    var upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numSet = "1234567890";
    var specSet = "!@#$%^&*()_-+{}[]|:;',.=<>/";
    //collecting inputs
    var inputLength = prompt("What is the input length? (8-128 characters only)")
    //validation for character length (can only choose between 8 and 128 characters)
    if (inputLength === null) {
      return;
    }
    else if (inputLength < 8 || inputLength > 128) {
      alert("Sorry, you can only choose between 8-128 characters")
      generatePassword();
    }
    else {
      //collecting lower/upper/num/special as boolean values
      var inputLower = confirm("Would you like lowercase characters? If yes, click Ok, if no, click Cancel");
      var inputUpper = confirm("Would you like uppercase characters? If yes, click Ok, if no, click Cancel");
      var inputNum = confirm("Would you like numeric characters? If yes, click Ok, if no, click Cancel");
      var inputSpecial = confirm("Would you like special characters? If yes, click Ok, if no, click Cancel");
    };
    //If the user didn't select any characters, then it prompts them to start over
    if (inputLower == false && inputUpper == false && inputNum == false && inputSpecial == false) {
      alert("Please select at least 1 character type. Try Again.")
      generatePassword();
    };

    //clears the character sets if user clicked "Cancel"
    if (inputLower == false) { lowerSet = "" };
    if (inputUpper == false) { upperSet = "" };
    if (inputNum == false) { numSet = "" };
    if (inputSpecial == false) { specSet = "" };

    //creating a for loop to build the password, set as the length of the string
    function buildPassword() {
      for (var i = 0; i < (inputLength); i++) {
        //builds a combined string with the different vars depending on user confirmation, then adds a character
        combined = lowerSet + upperSet + numSet + specSet;
        passwordString += combined.charAt(Math.floor(Math.random() * combined.length))
      }
    }
    //validation if the string contains all the needed things
    buildPassword();
    //returning the password
    return (passwordString)

  };

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
