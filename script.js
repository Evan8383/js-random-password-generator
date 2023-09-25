// Dom selectors
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const passwordLength = document.querySelector("#passwordLength");
const generateBtn = document.querySelector("#generate");
const confirmBtn = document.querySelector("#confirmBtn")
const passwordMenu = document.querySelector("#passwordMenu")
const passwordLengthDisplay = document.querySelector("#passwordLengthDisplay")
const passwordText = document.querySelector("#password")


// random character selection functions
function randomUppercase(){
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return uppercase[Math.floor(Math.random() * uppercase.length)]
}
function randomLowercase(){
  const lowercase = "abcdefghijklmnopqrstuvwxyz"
  return lowercase[Math.floor(Math.random() * lowercase.length)]
}
function randomNumbers(){
  const numbers = "1234567890"
  return numbers[Math.floor(Math.random() * numbers.length)]
}
function randomSymbols(){
  const symbols = "!@#$%^&*"
  return symbols[Math.floor(Math.random() * symbols.length)]
}

// Add event listener to generate button
generateBtn.addEventListener("click", () =>{
  passwordMenu.classList.toggle("active")
});
// Add event listener to confirm button
confirmBtn.addEventListener('click', () =>{
  const checkboxes = [uppercase, lowercase, numbers, symbols]
  const checked = []
  
  checkboxes.forEach((checkbox) =>{
    if (checkbox.checked){
      checked.push(checkbox.id)
    }
  })
  if (checked.length === 0){
    console.log("Please select at least one option to generate a password")
  } else {
    generatePassword(checked)
  }
})
function generatePassword(checked){
  let generatedPassword = ''

  while (generatedPassword.length < passwordLength.value){
    checked.forEach((selectedProp) =>{
      switch (selectedProp){
        case 'uppercase':
          generatedPassword += randomUppercase();
          break;
        case 'lowercase':
          generatedPassword += randomLowercase();
          break;
        case 'numbers':
          generatedPassword += randomNumbers();
          break;
        case 'symbols':
          generatedPassword += randomSymbols();
          break; 
        default:
          break;
      }
    })
  }
  let superRandomPassword = ''
  for (let i = 0; i < generatedPassword.length; i++){
    superRandomPassword += generatedPassword[Math.floor(Math.random() * generatedPassword.length)]
  }
  passwordText.value = superRandomPassword
}

// Display password length
passwordLengthDisplay.innerHTML = passwordLength.value
passwordLength.oninput = function(){
  passwordLengthDisplay.innerHTML = this.value;
} 
