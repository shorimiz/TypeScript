define(["require", "exports", './ZipCodeValidator'], function (require, exports, foo) {
    "use strict";
    var Greeter = (function () {
        function Greeter(element) {
            this.element = element;
            this.element.innerHTML += "The time is: " + new foo.ZipCodeValidator().isAcceptable('55');
        }
        Greeter.prototype.start = function () {
        };
        Greeter.prototype.stop = function () {
        };
        return Greeter;
    }());
    exports.Greeter = Greeter;
});
//# sourceMappingURL=app.js.map