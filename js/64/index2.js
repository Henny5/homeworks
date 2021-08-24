window.app = window.app ||{};
window.app.utils = (function (module) {
    'use strict';

    
module.caseInsensitiveCompare = (a, b) => a.toLowerCase() === b.toLowerCase();

return module;
}(window.app.utils || {}));
/*console.log("window.app.caseInsensitiveCompare('perry', 'Perry')", window.app.caseInsensitiveCompare('perry', 'Perry'));*/
