System.register(["./AllValidators"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var s;
    var strings, validators;
    return {
        setters:[
            function (s_1) {
                s = s_1;
            }],
        execute: function() {
            // Some samples to try
            strings = ["Hello", "98052", "101"];
            // Validators to use
            validators = {};
            validators["ZIP code"] = new s.ZipCodeValidator();
            validators["Letters only"] = new s.LettersOnlyValidator();
            // Show whether each string passed each validator
            strings.forEach(function (s) {
                for (var name_1 in validators) {
                    console.log("\"" + s + "\" - " + (validators[name_1].isAcceptable(s) ? "matches" : "does not match") + " " + name_1);
                }
            });
        }
    }
});
//# sourceMappingURL=app.js.map