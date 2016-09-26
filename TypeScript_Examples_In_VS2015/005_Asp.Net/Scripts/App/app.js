define(["require", "exports", './file1'], function (require, exports, d) {
    "use strict";
    new d.ZipCodeValidator().isAcceptable('kkk5');
    console.log(new d.ZipCodeValidator().isAcceptable('kkk5'));
});
//# sourceMappingURL=app.js.map