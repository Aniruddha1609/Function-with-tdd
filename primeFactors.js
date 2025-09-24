function primeFactors(numberToCheck) {
  let divisor = 2;
  let finalString = "";
  while (numberToCheck > 1) {
    
    if (numberToCheck % divisor === 0) {
      numberToCheck = numberToCheck / divisor;
      finalString = finalString + divisor + " ";
    } else {
      divisor++;
    }
  }
 
  return finalString;
}

function composeMessage(numberToCheck, expectedValue) {
  const finalString = primeFactors(numberToCheck);
  const symbol = finalString === expectedValue ? '✅' : '❌';
  console.log(symbol + " expected value is " + " is " + expectedValue + " and your value is " + finalString );
}

function printAll() {
  composeMessage(10, '2 5 ');
  composeMessage(12, '2 2 3 ');
  composeMessage(16, '2 2 2 2 ');
  composeMessage(20, '2 2 5 ');
}

printAll();






