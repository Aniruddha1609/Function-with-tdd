function getAllPrimes(startOfRange, endOfRange) {
  let finalString = "";
  for (let currentTerm = startOfRange; currentTerm <= endOfRange; currentTerm++) {
    if (currentTerm >= 2) { 
      let isPrime = true;

      for (let divisor = 2; divisor <= currentTerm / 2; divisor++) {
      
        if (currentTerm % divisor === 0) {
          isPrime = false;
        }
      }
      
      if (isPrime) {
        finalString = finalString + " " + currentTerm;
      }
    }
  }
  return finalString;
}

function composeMessage(startOfRange ,endOfRange, expectedValue) {
  const finalString = getAllPrimes(startOfRange, endOfRange);
  const symbol = finalString === expectedValue ? '✅' : '❌';
  console.log(symbol + " expected value is " + " is " + expectedValue + " and your value is " + finalString);
}

function printAll() {
  composeMessage(0,2," 2");
  composeMessage(0,5," 2 3 5" );
  composeMessage(0,10," 2 3 5 7" );
  composeMessage(0,20," 2 3 5 7 11 13 17 19" );
}

printAll();
