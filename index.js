//assign variables to the ids in the html
const resultEl = document.getElementById('genPass');
const lengthEl = document.getElementById('input');
const upperCaseEl = document.getElementById('upper');
const lowerCaseEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

//assign arrays for the different password requirements
var lowerCase = 'q w e r t y u i o p a s d f g h j k l z x c v b n m';
var upperCase = 'Q W E R T Y U I O P A S D F G H J K L Z X C V B N M';
var numbers = '1 2 3 4 5 6 7 8 9 0';
var lowerArray = lowerCase.split(' ');
var upperArray = upperCase.split(' ');
var numArray = numbers.split(' ');
  
//grab random values

//random lowerCase
 function genLower () {
  return lowerArray[Math.floor(Math.random()*26)];
};
//random upperCase
  function genUpper () {
    return upperArray[Math.floor(Math.random()*26)];
  };

//random number
function genNumber () {
  return numArray[Math.floor(Math.random()*numArray.length)];
};
//random special character
function genSymbol () {
  var symbols = '!@#$%^&*()?<>,.'
  return symbols[Math.floor(Math.random()*symbols.length)];
};

//assign an object to give me my values

const randomFunc = {
  lower: genLower,
    upper: genUpper,
    number: genNumber,
    symbol: genSymbol,
  };

  
//generate event listener for generate password button
generateEl.addEventListener('click', ()  => {
    //turn lenth string into a number and give me true or false values for the checkboxes
    var length = +lengthEl.value;
    const hasUpper = upperCaseEl.checked;
    const hasLower = lowerCaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;
    //this will return the generated password in length and the required values
    resultEl.value = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
    
});
  
//generate password
//pass in the values
function generatePassword (lower, upper, number, symbol, length) {
    //make values an empty string
    let generatedPassword = '';
    const typesPass = upper + lower + number + symbol;

    
    //turn password string into an array to loop over as an object
    const typesArray = [{ upper }, { lower }, { number }, { symbol }].filter(item=> Object.values(item)[0]);

    
    //if 0 gimme nothing
    if (typesPass === 0) {
        return '';
    }
    //loop over the array and object keys to generate password over the required values
    for (let i=0; i<length; i+= typesPass) {
        typesArray.forEach(type=> {
            const funcName = Object.keys(type)[0];
            console.log('funcName:', funcName);
            generatedPassword += randomFunc[funcName]();
        });
    }
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;

}
  
  
  
  