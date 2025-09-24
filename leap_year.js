function leapYear(year) {
const isDivisibleBy400 = year % 400 === 0;
const isNotDivisibleBY100 = year % 100 !== 0;
const isDivisibleBy4 = year % 4 === 0;
let isLeapYear = (isDivisibleBy400 || (isNotDivisibleBY100 && isDivisibleBy4));
return isLeapYear;
}

function printIsLeapYear(year, expectedValue) {
  const isLeapYear = leapYear(year);
  if(isLeapYear === expectedValue) {
    console.log('✅ expected is ' + expectedValue + ' and your result is '+ isLeapYear );
  } else {
    console.log('❌ expected is ' + expectedValue + ' and your result is '+  isLeapYear);
  }
}

function printAll(year, expectedValue) {
  printIsLeapYear(1900, false);
  printIsLeapYear(2000, true);
  printIsLeapYear(2024, true);
  printIsLeapYear(2025, false);
}

printAll();





