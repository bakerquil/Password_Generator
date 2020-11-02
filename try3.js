


function choices(){
    var numbs = [1,2,3,4,5,6,7,8,9,0]
var specialCharacters = ["!","@","#","$","%","&","*"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let possibleChars = [];

    var length = (prompt('Select a # between 9 and 128 for Character Length'));
    while (length < 9){
        alert("Must be more than 8 in length");
        length = (prompt('Select a # between 9 and 128 for Character Length'));}
    while (length > 128){ alert("Must be less than 129 Characters ");
    length = (prompt('Select a # between 9 and 128 for Character Length'));}
    let counter = 0
    let numbsConfirmed
    let lowerCaseConfirmed
    let upperCaseConfirmed
    let specialCharactersConfirmed
    
    do {
        
   numbsConfirmed = confirm('Would you like number?')
   lowerCaseConfirmed = confirm('Would you like lowercase')
   upperCaseConfirmed = confirm('Would you like upper case?')
   specialCharactersConfirmed = confirm('Would you like special characters?')

  if (numbsConfirmed){
      possibleChars.push(numbs);
      counter ++
  }
  if (lowerCaseConfirmed){
      possibleChars.push(lowercase);
      counter ++
  }
  if (upperCaseConfirmed){
      possibleChars.push(uppercase);
      counter ++
  }
  if (specialCharactersConfirmed){
      possibleChars.push(specialCharacters);
      counter ++
  }
  if (counter < 1){
      alert('You Must Select One Option!')
  }

 } while (counter === 0)
    
  function generatePassword(passwordLength, possibleCharacters){
    var result = '';
    for (var i = 0; i < passwordLength; i++){
        var charset = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
        var char = charset[Math.floor(Math.random() * charset.length)];
        result += char
    }
    return result;
}
return generatePassword(length,possibleChars);
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = choices();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
