window.app = window.app ||{};
window.app.counters = (function (module) {

'use strict';

// SL - this isnt really incrementing it 10 times - its incrementing it by 10...
console.log(window.app.counters.incrementCount(10));

// SL - not sure what your intent here was. Im not following how you expected the 2 different modules to be used
console.log(window.app.counters.createCounter(2,window.app.counters.incrementCount(5)));



console.log(window.app.counters.getCount(window.app.counters.incrementCount));
console.log(window.app.counters.getCount(window.app.counters.createCounter));

return module;

}(window.app.counters || {}));

// SL - If your feeling like your not understanding as well as you need to, please let me know. Making sure you can do earlier homeworks - including Java basic programing ones (and rewatching how it was done in class if unable to complete) might be a good idea as well..