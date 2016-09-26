window.onload = function () {
    // Some samples to try
    var strings = ["Hello", "98052", "101"];
    // Validators to use
    var validators = {};
    validators["ZIP code"] = new Validation.ZipCodeValidator();
    validators["Letters only"] = new Validation.LettersOnlyValidator();
    // Show whether each string passed each validator
    for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
        var s = strings_1[_i];
        for (var name in validators) {
            console.log("\"" + s + "\" - " + (validators[name].isAcceptable(s) ? "matches" : "does not match") + " " + name);
        }
    }
};
//# sourceMappingURL=app.js.map