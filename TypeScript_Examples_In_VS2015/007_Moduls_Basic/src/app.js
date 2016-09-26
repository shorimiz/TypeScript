/*
There is a one-to-one correspondence between JS files and modules
*/
System.register(["./myModule"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var myModule_1;
    return {
        setters:[
            function (myModule_1_1) {
                myModule_1 = myModule_1_1;
            }],
        execute: function() {
            myModule_1.doSomething();
        }
    }
});
//# sourceMappingURL=app.js.map