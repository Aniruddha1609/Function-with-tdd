function firstPrimeAbove(baseNumber, expectedValue) {
let numberToCheck = baseNumber + 1;

  if (numberToCheck <= 2) {
    numberToCheck = 2;
    return (numberToCheck);
  } else {
    let isPrime = false;

    while (!isPrime) {
      isPrime = true; 
      
      for (let divisor = 2; divisor < numberToCheck; divisor++) {
        
        if (numberToCheck % divisor === 0) {
          isPrime = false;
        }  
      }

      if (!isPrime) {
        numberToCheck++;
      }
    }
    return numberToCheck;
  }
}


function printFirstPrime(baseNumber, expectedValue) {
  const firstPrimeValue = firstPrimeAbove(baseNumber, expectedValue);
  if(firstPrimeValue === expectedValue) {
    console.log('✅ first prime above should be ' + expectedValue + ' and your result is '+  firstPrimeValue);
  } else {
    console.log('❌ first prime above should be ' + expectedValue + 'and your result is '+  firstPrimeValue);
  }
}

function printAll(baseNumber, expectedValue){
  printFirstPrime(1, 2);
  printFirstPrime(2, 3);
  printFirstPrime(3, 5);
  printFirstPrime(19, 23);
  printFirstPrime(41, 43);
}

printAll();



