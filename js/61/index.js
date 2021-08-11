'use strict';

let letters=['a','b'];

function myEvery(theArray, testfunc) {
    for (let i = 0; i < theArray.length; i++) {
      /*console.log(theArray[i]);
      console.log(testfunc(theArray[i]));*/
      if (!testfunc(theArray[i])){//! = ===false
        return false;
      }      
    }
    return true;
  }

  /*console.log(myEvery(letters,isUppercase));*/
  /*console.log(myEvery(letters,isLowercase));*/

  function isUppercase(letter) {
    return letter===letter.toUpperCase();

  }

  /*console.log(isUppercase('a'));
  console.log(isUppercase('B'));*/

  function isLowercase(letter) {
    return letter===letter.toLowerCase();

  }

  function mySome(theArray, testfunc) {
      for (let i = 0; i < theArray.length; i++) {
          //if one = true its true 
        if (testfunc(theArray[i])){
          return true;
        } 

        }    
    
      return false;
    }
  
    console.log(mySome(letters,isUppercase));
    console.log(mySome(letters,isLowercase));

    function myOnlyIf(theArray,test,action){
        for (let i = 0; i < theArray.length; i++) {
            if (test(theArray[i])){
                console.log(action(theArray[i])) ;
            }
        }
    }

    function myAction(letter){
        console.log(letter=letter.toUpperCase());
    }
 
    console.log(letters);
    myOnlyIf(letters,isLowercase,myAction);
    console.log(myAction('a'));

    function myForEach(theArray, callback) {
        for (let i = 0; i < theArray.length; i++) {
          callback(theArray[i]);
        }
      }

    myForEach(letters, myAction);

    function myFilter(theArray, test) {
        let result ;
        theArray.forEach(v => {
            if(test(v)) {
              result.push(v);
            }
          });
        
          return result;
        
    }

    console.log(myFilter(letters, myAction));