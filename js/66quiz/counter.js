// sl - indentation is wrong throughout the file, hard to follow...
window.app = window.app ||{};
window.app.counters = (function (module) {

'use strict';

let count=0;

module.incrementCount = function(incrmnt){
// SL - not understanding the logic here, so say count was 1 and I pass in incrmnt of 2. inc will be 2+1 = 3 then next line adds that to the original count so 3 + 1 and it even then post incrments so after that line count will be 5. II would have thiough 1 incrmented by 2 would be 3...
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

