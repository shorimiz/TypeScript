﻿export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}