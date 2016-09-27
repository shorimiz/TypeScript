declare const System: any;

import { ZipCodeValidator as Zip } from "./ZipCodeValidator";

let needZipValidation = true;

if (needZipValidation) {
    System.import("./src/ZipCodeValidator").then((ZipCodeValidator: typeof Zip) => {
        var x = new Zip();
        console.log(x.isAcceptable("..."));
    });
}


