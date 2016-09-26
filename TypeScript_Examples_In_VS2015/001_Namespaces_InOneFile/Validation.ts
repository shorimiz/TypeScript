namespace Validation {

    //Because we want the  interfaces and classes here to be visible outside the namespace, we preface them with export.
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;

    //Because we want the  interfaces and classes here to be visible outside the namespace, we preface them with export.
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }

    //Because we want the  interfaces and classes here to be visible outside the namespace, we preface them with export.
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}
