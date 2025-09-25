function fibonacciSeries(limit) {
  let firstTerm = 0;
  let secondTerm = 1;
  let finalString = "";
  finalString = finalString + firstTerm;

  for (let currentTerm = 1; currentTerm < limit; currentTerm++) {
    const fibonacciValue = firstTerm + secondTerm;
    firstTerm = secondTerm;
    finalString = finalString + " " + firstTerm;
    secondTerm = fibonacciValue;
  } 
  return finalString;
}

function composeMessage(limit, expectedValue) {
  const finalString = fibonacciSeries(limit);
  const symbol = finalString === expectedValue ? '✅' : '❌';
  console.log(symbol + " expected value is " + " is " + expectedValue + " and your value is " + finalString);
}

function printAll() {
  composeMessage(1, '0');
  composeMessage(2, '0 1');
  composeMessage(3, '0 1 1');
  composeMessage(4, '0 1 1 2');
  composeMessage(5, '0 1 1 2 3');
}

printAll();


 



