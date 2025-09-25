function ap(term, noOfTerm, difference) {
  let countOfTerm = term;
  let sum = 0;

while (countOfTerm <= noOfTerm) {
  sum = sum + countOfTerm;
  countOfTerm = countOfTerm + difference;
}
  return sum;
}

function composeMessage(term, noOfTerm, difference, expectedValue) {
  const apValue = ap(term, noOfTerm, difference);
  const symbol = apValue === expectedValue ? '✅' : '❌';
  console.log(symbol + " expected value is " + " is " + expectedValue + " and your value is " + apValue );
}

function printAll() {
    composeMessage(0, 3, 1, 6);
    composeMessage(1, 5, 1, 15);
    composeMessage(5, 10, 2, 21);
    composeMessage(7, 11, 1, 45);
    composeMessage(2, 7, 3, 7);
}

printAll();



