// SL - indentation is wrong throughout the file, hard to follow...
window.app = window.app ||{};
window.app.counters = (function (module) {
'use strict';

// SL - is this meant to be the count for each counter? if so this cant work - this one variable is shared by all callers of createCounter
let counter=0;

// SL - a param named test? what does that signify? test sint a good name I dont think...
module.createCounter = function(incrmnt,test){
  // SL - what is the point of this? we will always loop exactly one time. how is this useful? why not just have the counter=counter+test line?
for(counter=0;counter>0;counter++){
        if(counter===1){
         counter=counter+test;

        }

    }
// SL - again, I dont know exactly what the math here is supposed to be doing
const inc=incrmnt+counter;
counter=inc+counter++;

return counter;
};
//cant get it to add a count into the counter...
return module;

}(window.app.counters || {}));