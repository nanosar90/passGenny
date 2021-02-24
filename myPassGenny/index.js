const resultEl = document.getElementById('genPass');
const lengthEl = document.getElementById('input');
const upperCaseEl = document.getElementById('upper');
const lowerCaseEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const randomFunc = {
    lower: genLower,
    upper: genUpper,
    number: genNumber,
    symbol: genSymbol,
  };
  
//generate event listener for password
generateEl.addEventListener('click', ()  => {
    var length = +lengthEl.value;
    const hasUpper = upperCaseEl.checked;
    const hasLower = lowerCaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;
    /* const yourPassword = resultEl.value; */

    resultEl.value = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
    
});
  
//generate password
function generatePassword (lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesPass = upper + lower + number + symbol;

    console.log(typesPass);

    const typesArray = [{ upper }, { lower }, { number }, { symbol }].filter(item=> Object.values(item)[0]);

    console.log(typesArray);

    if (typesPass === 0) {
        return '';
    }

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
  
  var lowerCase = 'q w e r t y u i o p a s d f g h j k l z x c v b n m';
  var upperCase = 'Q W E R T Y U I O P A S D F G H J K L Z X C V B N M';
  var numbers = '1 2 3 4 5 6 7 8 9 0';
  var lowerArray = lowerCase.split(' ');
  var upperArray = upperCase.split(' ');
  var numArray = numbers.split(' ');
    
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
  
  
  