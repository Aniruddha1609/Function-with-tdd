function startingNumber(startOfTheRange) {
  let currentNumber = startOfTheRange
  
  if (currentNumber % 2 !== 0) {
    currentNumber = currentNumber + 1;
  }
  return currentNumber;
}

function evenNumbers(startOfTheRange, endOfTheRange, expectedValue) {
  let finalString = "";
  finalString = finalString + startingNumber(startOfTheRange) 
  
  for (let currentTerm = startOfTheRange + 2; currentTerm <= endOfTheRange; currentTerm++) {
    
    if (currentTerm % 2 == 0) {
      finalString = finalString + " " + currentTerm ; 
    }
  }
  return finalString;
}

function getEmoji(startingNumber,endOfTheRange,expectedValue) {
  let finalString = evenNumbers(startingNumber,endOfTheRange,expectedValue);
  let symbol = (finalString === expectedValue) ? "✅" : "❌";  
  console.log(symbol + " expected value is " + " is " + expectedValue + " and your value is " + finalString );
}

function printAll() {
  getEmoji(1, 6, "2 4 6");
  getEmoji(6, 12, "6 8 10 12");
  getEmoji(5, 10, "6 8 10");
  getEmoji(9, 18, "10 12 14 16 18");
  
}


printAll();



