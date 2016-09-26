define(["require", "exports", './app'], function (require, exports, gt) {
    "use strict";
    require([], function () {
        // code from window.onload
        var el = document.getElementById('content');
        var greeter = new gt.Greeter(el);
        greeter.start();
    });
});
//# sourceMappingURL=AppConfig.js.map