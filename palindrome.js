function palindrome(numberToCheck) {
  let reversedNum = 0;
  let num = numberToCheck;
  
  while (num > 0) {
    let lastDigit = num % 10;                 
    reversedNum = reversedNum * 10 + lastDigit; 
    num = (num - (num % 10) ) / 10;            
  }
  
  return reversedNum === numberToCheck;
}

function getEmoji(numberToCheck, expectedValue) {
  const isPalindrome = palindrome(numberToCheck);
  const symbol = isPalindrome ===  expectedValue ? "✅" : "❌";
  console.log(symbol + " expected value is " + " is " + expectedValue + " and your value is " + isPalindrome );
}

function printAll() {
    getEmoji(121, true);
    getEmoji(1221, true);
    getEmoji(192, false);
    getEmoji(19591, true);
}

printAll();









