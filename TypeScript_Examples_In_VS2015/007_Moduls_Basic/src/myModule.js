System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ExportedClass, AnotherClass;
    function doSomething() {
        console.log('ssss');
        // this function can be accessed from outside the module
    }
    exports_1("doSomething", doSomething);
    return {
        setters:[],
        execute: function() {
            ExportedClass = (function () {
                function ExportedClass() {
                }
                return ExportedClass;
            }());
            exports_1("ExportedClass", ExportedClass);
            AnotherClass = (function () {
                function AnotherClass() {
                }
                return AnotherClass;
            }());
        }
    }
});
//# sourceMappingURL=myModule.js.map