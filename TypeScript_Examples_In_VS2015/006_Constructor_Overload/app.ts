class Foo {
    constructor()
    constructor(id?: number) {
    }
}

class Foo1 {
    constructor()
    constructor(id: number)
    constructor(id?: number) {
    }
}



window.onload = () => {

    //The last function overload is only used in the implementation and not available publicly.This is shown below:
    const foo = new Foo();
    // const foo2 = new Foo(123); // Error! : not public

    const foo1 = new Foo1();
    const foo2 = new Foo1(123); // Okay
};