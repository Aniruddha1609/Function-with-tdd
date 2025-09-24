function simpleInterest(principle, time, rateOfInterest, expectedValue)  {
  return (principle * time * rateOfInterest) / 100;
}

function printValue(principle, time, rateOfInterest, expectedValue) {
  let simpleInterestvalue = simpleInterest(principle, time, rateOfInterest, expectedValue);
  
  if(simpleInterestvalue === expectedValue) {
    console.log('✅ expected interest is ' + expectedValue + ' and your result is '+  simpleInterestvalue);
  } else {
    console.log('❌ expected interest is ' + expectedValue + 'and your result is '+  simpleInterestvalue);
  }
}

function printAllInterest() {
  printValue(100, 1, 10, 10);
  printValue(100, 2, 10, 20);
  printValue(500, 5, 10, 250);
  printValue(1000, 1, 5, 50);
  printValue(2000, 3, 20, 1200);
}

printAllInterest();
