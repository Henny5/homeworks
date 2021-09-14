// sl - indentation is wrong throughout the file, hard to follow...
(function(){
  'use strict';


const nums=[2,4,6,8];
let newNum=[0,0,0,0]; // sl - why pass this in? why not create and populate inside map?

function map(nums, test,newNum){

  let result2; // sl - what is this used for? nothing ever assigned to it
  for (let i = 0; i < nums.length; i++) {
    // sl - why would we want 2 loops here? if we have 4 numbers we want to do this 4 times not 4 * 4...
    // sl - also really confusing to have 2 loops both using a variable called i. happens to be outer i is a different i then inner i - but really confusing...
  for (let i = 0; i < newNum.length; i++) {
    test(nums[i]);
    // sl - what are we doing here? the line above got the new number - but drops it on the floor, not sure what were trying to do here...
    // finding something (not sure what) and then putting it in newNum?
    let index = nums.indexOf(nums[i]);
       newNum[i]=nums[index];

         }

  }
    return result2; // sl - returns undefined
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

// sl - looks like you could use some more practice here... maybe review the classes and homeworks were we went over the callbacks and array functions in particular...