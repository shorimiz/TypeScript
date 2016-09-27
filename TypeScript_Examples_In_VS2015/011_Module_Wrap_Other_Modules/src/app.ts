
import * as s from "./AllValidators";

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]:s.StringValidator; } = {};
validators["ZIP code"] = new  s.ZipCodeValidator();
validators["Letters only"] = new s.LettersOnlyValidator();

// Show whether each string passed each validator
strings.forEach(s => {
    for (let name in validators) {
        console.log(`"${s}" - ${validators[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
    }
});




