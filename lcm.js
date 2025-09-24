function lcm(firstTerm, secondTerm) {
  let multiple = 0;
  let isMultiple = false;

  if(firstTerm === 0 || secondTerm === 0) {
    multiple = 0;
    return 0;
    isMultiple = true
  } else { 
    multiple = secondTerm;
  }
  while(!isMultiple) {
  
    if(multiple % firstTerm === 0 && multiple % secondTerm === 0) {
      return (multiple);
      isMultiple = true;
    } else {
      multiple = multiple + 1;
    }
  }
  
}

function printLcm(firstTerm, secondTerm, expectedValue) {
  const lcmValue = lcm(firstTerm, secondTerm);
  if(lcmValue === expectedValue) {
     console.log('✅ lcm is '+ lcmValue + ' and expected value is '+ expectedValue);
  } else {
     console.log('❌ lcm is '+ lcmValue + ' and expected value is '+ expectedValue);
  }
}

function printAll(firstTerm, secondTerm, expectedValue) {
  printLcm(0, 1, 0);
  printLcm(3, 6, 6);
  printLcm(7, 28, 28);
  printLcm(4, 32, 32);
}

printAll();
