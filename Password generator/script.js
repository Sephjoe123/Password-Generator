var upperCase = document.getElementById("uppercase")
var lowerCase = document.getElementById("lowercase")
var numbers =   document.getElementById("numbers")
var symbols = document.getElementById("symbols")
var length = document.getElementById("length")
var generateBtn = document.getElementById("generate")
var generateInput = document.getElementById("input")


let Capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let smallLetters = "abcdefghijklmnopqrstuvwxyz";
let randomNumbers = "01234567";
let $symbols = "!@#$%^&*()?/";


function getUpperLetters (){
    return Capitals[Math.floor(Math.random() * Capitals.length)];
}
function getSmallLetters (){
    return smallLetters[Math.floor(Math.random() * smallLetters.length)]
}
function getRandomNumbers(){
 return randomNumbers[Math.floor(Math.random() * randomNumbers.length)]
}
function getRandomSymbols(){
    return $symbols[Math.floor(Math.random() * $symbols.length)]
}

const passwordFunc = {
 lowerFunc: getSmallLetters,
 higherFunc: getUpperLetters,
 numbersFunc: getRandomNumbers,
 symbolsFunc: getRandomSymbols,
}

generateBtn.addEventListener("click", checkValue)
    function checkValue(){
        const upperCheck = upperCase.checked;
        const lowerCheck = lowerCase.checked;
        const numberCheck = numbers.checked;
        const symbolsCheck = symbols.checked;
        const lengthCheck = +length.value;
       generatePassword(upperCheck,lowerCheck,numberCheck,symbolsCheck,lengthCheck);
    }

function generatePassword(upperCheck,lowerCheck,numberCheck,symbolsCheck,lengthCheck){
let checkCount = upperCheck + lowerCheck + numberCheck + symbolsCheck;
let checkArray = [{upperCheck},{lowerCheck},{numberCheck},{symbolsCheck}]
checkArray.filter( arrayItem => Object.values(arrayItem)[0])
console.log(checkCount)

if(checkCount === 0){
  return "";
}
for(let i = 0; i < length; checkCount++){
    
}
}

   





   









