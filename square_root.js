function squareRoot(originalNum) {
  return originalNum ** 0.5;
}

function printSquareroot(originalNum, expectedValue) {
  const squaredValue = squareRoot(originalNum);
  
  if (squaredValue === expectedValue) {
    console.log('✅ expected  is ' + expectedValue + ' and your result is '+  squaredValue);
  } else {
    console.log('❌ expected  is ' + expectedValue + ' and your result is '+  squaredValue);
  }
}

function printAll() {
  printSquareroot(4, 2);
  printSquareroot(9, 3);
  printSquareroot(16, 4);
  printSquareroot(25, 5);
  printSquareroot(100, 10);
}

printAll();






