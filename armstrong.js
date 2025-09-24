function armstrong(numberToCheck) {
  let originalNumber = numberToCheck;
  let sum = 0;
  let tempNumber = numberToCheck;
  let lastDigits = 0;

  while (tempNumber > 0) {
    lastDigits = lastDigits + 1;
    tempNumber = (tempNumber - (tempNumber % 10) ) / 10; 
  }

  tempNumber = numberToCheck;
  
  while (tempNumber > 0) {
    let digit = tempNumber % 10;
    let power = 1;
    
    for (let iterator = 0; iterator < lastDigits; iterator++) {
      power = power * digit;
    }
    sum = sum + power;
    tempNumber = (tempNumber - (tempNumber % 10)) / 10;  
  }   
  
  if (sum === originalNumber) {
    return true;
  } else {
    return false;
  }
}

function composeMessage(numberToCheck, expectedValue) {
  const isArmstrong = armstrong(numberToCheck);
  const symbol = (isArmstrong === expectedValue) ? '✅' : '❌';
  console.log(symbol + " expected value is " + " is " + expectedValue + " and your value is " + isArmstrong );
}

function printAll() {
  composeMessage(153, true);
  composeMessage(172, false);
  composeMessage(370, true);
  composeMessage(453, false);
  composeMessage(407, true);
}

printAll();




