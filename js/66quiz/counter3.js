window.app = window.app ||{};
window.app.counters = (function (module) {

'use strict';

console.log(window.app.counters.incrementCount(10));
console.log(window.app.counters.createCounter(2,window.app.counters.incrementCount(5)));



console.log(window.app.counters.getCount(window.app.counters.incrementCount));
console.log(window.app.counters.getCount(window.app.counters.createCounter));
      
return module;

}(window.app.counters || {}));
