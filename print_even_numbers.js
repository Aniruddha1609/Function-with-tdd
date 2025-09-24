function startingNumber(startOfTheRange) {
  let firstValue = startOfTheRange
  
  if (firstValue % 2 !== 0) {
    firstValue = firstValue + 1;
  }
  return firstValue;
}

function evenNumbers(startOfTheRange, endOfTheRange) {
  let finalString = "";
  finalString = finalString + startingNumber(startOfTheRange); 
  
  for (let currentTerm = startOfTheRange + 2; currentTerm <= endOfTheRange; currentTerm++) {
    
    if (currentTerm % 2 == 0) {
      finalString = finalString + " " + currentTerm ; 
    }
  }
  return finalString;
}

function composeMessage(startingNumber,endOfTheRange,expectedValue) {
  const finalString = evenNumbers(startingNumber,endOfTheRange);
  const symbol = (finalString === expectedValue) ? "✅" : "❌";  
  console.log(symbol + " expected value is " + " is " + expectedValue + " and your value is " + finalString );
}

function printAll() {
  composeMessage(1, 6, "2 4 6");
  composeMessage(6, 12, "6 8 10 12");
  composeMessage(5, 10, "6 8 10");
  composeMessage(9, 18, "10 12 14 16 18");
}

printAll();



