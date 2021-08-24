window.app=window.app || {};
//to make sure cant acces the function v
window.app.utils = (function(module){
    'use strict';

    const day = ['Sunday', 'Monday', 'Tuesday'];

  
    module.getDayNumber=function (dayOfWeek) {
      return day.findIndex(d => d.toLowerCase() === dayOfWeek.toLowerCase());
    };
  
    
    module.getDayName = (index) => day[index - 1];
      
    return module;
    
}(window.app.utils || {}));
//())to tell reader their accesssing before the function not the function itself
  

 /* console.log('window.app.getDayNumber("Tuesday")', window.app.getDayNumber('Tuesday'));
  console.log('window.app.getDayName(1)', window.app.getDayName(1));*/


  
   
  
    