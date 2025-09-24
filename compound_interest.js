function compoundInterest(principle, time, rateOFInterest, expectedValue)  {
    let updatedPrincipal = principle;
    
    for(let currentYearNumber = 1; currentYearNumber <= time; currentYearNumber++ ) {
    let rateOFInterestPerYear = (updatedPrincipal * rateOFInterest) / 100;
    updatedPrincipal = (updatedPrincipal + rateOFInterestPerYear);
  }
  
    let totalCompoundInterest = updatedPrincipal - principle;
  return totalCompoundInterest;
}

function printCompoundInterest(principle, time, rateOFInterest, expectedValue) {

  let interest = compoundInterest(principle, time, rateOFInterest, expectedValue);
  
  if(interest === expectedValue) {
    console.log('✅ expected interest is ' + expectedValue + ' and your result is '+  interest);
  } else {
    console.log('❌ expected interest is ' + expectedValue + ' and your result is '+  interest);
  }
}

function printAllInterest() {
 printCompoundInterest(0, 1, 2, 0);   
 printCompoundInterest(100, 2, 10, 21);	
 printCompoundInterest(1200, 3, 6.5, 249.53954999999996);
 printCompoundInterest(543, 3, 12, 219.875904);
}

printAllInterest();




