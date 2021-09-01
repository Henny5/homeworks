window.app = window.app ||{};
window.app.counters = (function (module) {

'use strict';

let counter=0;

module.createCounter = function(incrmnt,test){
     
for(counter=0;counter>0;counter++){
        if(counter===1){
         counter=counter+test; 
         
        }
        
    }
const inc=incrmnt+counter;
counter=inc+counter++;

return counter;
        
};
//cant get it to add a count into the counter...
      
return module;

}(window.app.counters || {}));