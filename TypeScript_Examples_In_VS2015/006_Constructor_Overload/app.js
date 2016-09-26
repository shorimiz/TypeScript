var Foo = (function () {
    function Foo(id) {
    }
    return Foo;
}());
var Foo1 = (function () {
    function Foo1(id) {
    }
    return Foo1;
}());
window.onload = function () {
    //The last function overload is only used in the implementation and not available publicly.This is shown below:
    var foo = new Foo();
    // const foo2 = new Foo(123); // Error! : not public
    var foo1 = new Foo1();
    var foo2 = new Foo1(123); // Okay
};
//# sourceMappingURL=app.js.map