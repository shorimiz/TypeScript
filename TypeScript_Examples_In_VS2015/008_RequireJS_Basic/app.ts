import foo = require('./ZipCodeValidator')

export class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;
    
    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: "+ new foo.ZipCodeValidator().isAcceptable('55');
    }

    start() {
    }

    stop() {
    }

}

