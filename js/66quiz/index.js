(function(){
  'use strict';


const nums=[2,4,6,8];
let newNum=[0,0,0,0];

function map(nums, test,newNum){
     
  let result2;
  for (let i = 0; i < nums.length; i++) {
    
  for (let i = 0; i < newNum.length; i++) {
    test(nums[i]); 
    let index = nums.indexOf(nums[i]);
       newNum[i]=nums[index];
           
         }
      
  } 
    return result2; 
  }

function add(nums) {
    
  let result;
    for (let i = 0; i < nums.length; i++) {
      console.log(nums[i]+=nums[i]);
    
    }     
  return result;
}

console.log(newNum);
console.log(nums);
console.log(add(nums));
console.log(map(nums,add, newNum));
console.log(newNum);
console.log(nums);

}());

   
//the add does its job and the  indexof is transfering whatever nums is to newnum but the new nums never go bk into the array hence the array stays 2468 and not 481216