# Hi 👋 this is a simple password generator

## Features
* The password generator was built using Javascript
* When you click the button, you will be able to pick a password
    * Choose how many characters (between 8-128)
    * Choose if you would like uppercase, lowercase, numbers, and symbols
* You can click the button again to go through it if you don't like this password

## Link
Here's a link to the [deployed page](http://rpgarde.github.io/password-generator/)

## This is the acceptance criteria I followed
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page