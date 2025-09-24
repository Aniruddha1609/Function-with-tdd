function decimalToBinary(decimalValue) {
  
  if ( decimalValue === 0) {
  return 0;
  }
  
  let finalString = "";
  
  while (decimalValue > 0) {
    let lastBinaryDigit = decimalValue % 2;
    finalString = finalString + lastBinaryDigit;
    decimalValue = (decimalValue - lastBinaryDigit) / 2;
  } 
  
  return finalString;
}

function getEmoji(decimalValue, expectedValue) {
  const finalString = decimalToBinary(decimalValue);
  const symbol = finalString === expectedValue ? "✅" : "❌"
  console.log(symbol + " expected value is " + " is " + expectedValue + " and your value is " + finalString );
}

function printAll() {
  getEmoji(2, "01");
  getEmoji(4, "001");
  getEmoji(10, "0101");
  getEmoji(15, "1111");
}

printAll();

