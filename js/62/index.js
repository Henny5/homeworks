'use strict';


const da = (function () {
    const day = ['Sunday', 'Monday', 'Tuesday'];

  
    function getDayNumber(dayOfWeek) {
      return day.findIndex(d => d.toLowerCase() === dayOfWeek.toLowerCase());
    }
  
    return {
      getDayName: (index) => day[index - 1],
      getDayNumber: getDayNumber
    };
  }());
  
  console.log('da.getDayNumber("Tuesday")', da.getDayNumber('Tuesday'));
  console.log('da.getDayName(1)', da.getDayName(1));

const interestCalculator = (function () {

        let rate;
        let years;
    
    function calculate(prinAmnt) {
      return (prinAmnt * years * (rate/100));
    }

    function setRate(r) {
        return rate=r;
      }

    function setYears(y) {
        return  years=y;
      }
  
    return {
      calculate:calculate,
      setRate:setRate,
      setYears:setYears
    };
  }());
  
  console.log(interestCalculator.setRate(1.5));
  console.log(interestCalculator.setYears(2));
  console.log(interestCalculator.calculate(100));
  



