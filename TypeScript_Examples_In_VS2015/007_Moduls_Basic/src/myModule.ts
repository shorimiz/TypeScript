
export function doSomething() {
    console.log('ssss');
        // this function can be accessed from outside the module
    }

    export class ExportedClass {
        // this class can be accessed from outside the module
    }

    class AnotherClass {
        // this class can only be accessed from inside the module
    }
