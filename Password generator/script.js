var upperCase = document.getElementById("uppercase")
var lowerCase = document.getElementById("lowercase")
var numbers =   document.getElementById("numbers")
var symbols = document.getElementById("symbols")
var length = document.getElementById("length")
var generateBtn = document.getElementById("generate")
var password = document.getElementById("password")

let Capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let smallLetters = "abcdefghijklmnopqrstuvwxyz";
let randomNumbers = "@!#$%^&&*()";
let Symbols = "01234567";


// create seperate functions that return random decimals, numbers, symbols and length
function getCapitals(){
   return Capitals[Math.floor(Math.random() * Capitals.length)]
    
}
function getSmallLetters(){1
 return smallLetters[Math.floor(Math.random() * smallLetters.length)]
}

function getRandomNumbers(){
return randomNumbers[Math.floor(Math.random() * randomNumbers.length)]
}

function getRandomSymbols(){
return Symbols[Math.floor(Math.random() * Symbols.length)]
}

// Store all the functions within an object so we would be able to access the values later

const stringFunc = {
lowerFunc: getSmallLetters,
higerFunc: getCapitals,
symbolFunc: getRandomSymbols,
numberFunc: getRandomNumbers
}

// add a click event listener on the generateBtn
generateBtn.addEventListener("click", () =>  {
    const lowerCheck = lowerCase.checked;
    const upperCheck = upperCase.checked;
    const numbersCheck = numbers.checked;
    const symbolsCheck = symbols.checked;
    const lengthCheck = parseInt(length.value);
    
    
    password.value = generatedPassword(lowerCheck,upperCheck,numbersCheck,symbolsCheck,lengthCheck);
    
});

// create variables that would house the checkBox if they are checked or not

function generatedPassword(lowerFunc,higerFunc,symbolFunc,numberFunc,lengthCheck){
let newPassword = "";

let checkCount = lowerFunc + higerFunc + symbolFunc + numberFunc;
let arrayCount = [{lowerFunc},{higerFunc},{symbolFunc},{numberFunc}].filter(item =>
    Object.values(item)[0]
)

if(checkCount == 0){
    return '';
}

for(let i = 0; i < lengthCheck; i += checkCount){
arrayCount.forEach(items => {
let applyFunction = Object.keys(items)[0];
newPassword += stringFunc[applyFunction]()
});

}

let password1 = newPassword.slice(0,lengthCheck);
return password1;

} 




