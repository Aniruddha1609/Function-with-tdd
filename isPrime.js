function checkPrime(numberToCheck,expectedValue) {
  let isPrime = true
  
  if(numberToCheck === 1){
    return false;
  }
  
  for (let divisor = 2; divisor < numberToCheck; divisor++) {
    
    if (numberToCheck % divisor === 0) {
      return false;
    }
  }
  return true;
}

function printIsPrime(numberToCheck, expectedValue) {
  const isPrime = checkPrime(numberToCheck, expectedValue);
  
  if (isPrime === expectedValue){
    console.log('✅ '+ numberToCheck + ' is ' + isPrime + ' and expected value is '+ expectedValue);
  } else {
    console.log('❌ '+ numberToCheck + ' is ' + isPrime + ' and expected value is '+ expectedValue);
  }
}  

function allPrimes(numberToCheck, expectedValue) {
  printIsPrime(1, false);
  printIsPrime(2, true);
  printIsPrime(3, true);
  printIsPrime(4, false);
  printIsPrime(5, true);
}

allPrimes();



