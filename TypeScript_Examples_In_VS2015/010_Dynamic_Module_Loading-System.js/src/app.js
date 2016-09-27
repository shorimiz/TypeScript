System.register(["./ZipCodeValidator"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ZipCodeValidator_1;
    var needZipValidation;
    return {
        setters:[
            function (ZipCodeValidator_1_1) {
                ZipCodeValidator_1 = ZipCodeValidator_1_1;
            }],
        execute: function() {
            needZipValidation = true;
            if (needZipValidation) {
                System.import("./src/ZipCodeValidator").then(function (ZipCodeValidator) {
                    var x = new ZipCodeValidator_1.ZipCodeValidator();
                    console.log(x.isAcceptable("..."));
                });
            }
        }
    }
});
//# sourceMappingURL=app.js.map