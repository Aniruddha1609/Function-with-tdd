function getNthFiboncci(limit) {
  let firstTerm = 0;
  let secondTerm = 1;

  for(let currentTerm = 1; currentTerm < limit; currentTerm++) {
    const fibonacciValue = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = fibonacciValue;
  }
  return firstTerm;
}

function composeMessage(limit, expectedValue) {
  const nthFibonacciValue = getNthFiboncci(limit);
  const symbol = nthFibonacciValue === expectedValue ? '✅' : '❌';
  console.log(symbol + " expected value is " + " is " + expectedValue + " and your value is " + nthFibonacciValue );
}

function printAll() {
  composeMessage(1, 0);
  composeMessage(2, 1);
  composeMessage(3, 1);
  composeMessage(4, 2);
  composeMessage(5, 3);
  composeMessage(6, 5);
}

printAll();



