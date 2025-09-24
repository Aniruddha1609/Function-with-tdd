function factorial(value) {
  let factorialValue = 1;
  for (let currentTerm = 1; currentTerm <= value; currentTerm++) {
    factorialValue = factorialValue * currentTerm;
  }
  return factorialValue;
}

function printFactorial(value , expectedValue) {
  let actualValue = factorial(value);
  if (actualValue === expectedValue) {
    console.log('✅ Factorial of '+ value + ' is ' + actualValue + ' and expected value is '+ expectedValue);
  } else {
     console.log('❌ Factorial of '+ value + ' is ' + actualValue + ' and expected value is '+ expectedValue);
  }
}

function printAll() {
  printFactorial(0, 1);
  printFactorial(1, 1);
  printFactorial(2, 2);
  printFactorial(3, 6);
  printFactorial(4, 24);
  printFactorial(5, 120);
}

printAll();
