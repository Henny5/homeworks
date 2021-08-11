'use strict';

function multiply(num1,num2){
    console.log(num1*num2);
    
}

multiply(3,2);

function getMultiplier(){
    return function(num1,num2){
        console.log(num1*num2);
    }
   
   }

let multiplier=getMultiplier();
multiplier(3,5);

function getMultiplier1(num1){
    return function(num2){
        console.log(num1*num2);
    }
}

var multiplyByFive = getMultiplier1(5);
console.log(multiplyByFive(2));