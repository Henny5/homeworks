window.app = window.app ||{};
window.app.counters = (function (module) {

'use strict';

let count=0;

module.incrementCount = function(incrmnt){
const inc=incrmnt+count;
count=inc+count++;
    
return count;
        
};

module.getCount = function(){    
    return count;
};
//this function is only adding up all the diff counts tog i need it to print each function return sep no thee function itself

      
return module;

}(window.app.counters || {}));

