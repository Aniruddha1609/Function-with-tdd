function hcf(firstTerm, secondTerm) {
  let hcf = 1;
  let iterator = 1;
  const min = firstTerm < secondTerm ? secondTerm : firstTerm;

  while (iterator <= min) {
    if (firstTerm % iterator === 0 && secondTerm % iterator === 0) {
      hcf = iterator;
    }
    iterator = iterator + 1;
  }
  return (hcf);
}

function printHcf(firstTerm, secondTerm, expectedValue) {
  const hcfValue = hcf(firstTerm, secondTerm) ;
  if(hcfValue === expectedValue) {
    console.log('✅ expected hcf is ' + expectedValue + ' and your result is '+  hcfValue);
  } else {
    console.log('❌ expected hcf is ' + expectedValue + 'and your result is '+  hcfValue);
  }
}

function printAllHcf() {
  printHcf(3, 7, 1);
  printHcf(4, 8, 4);
  printHcf(18, 35, 1);
  printHcf(18, 36, 18);
  printHcf(20, 60, 20);
}

printAllHcf();





