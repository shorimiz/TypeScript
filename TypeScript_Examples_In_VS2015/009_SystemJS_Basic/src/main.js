System.register(['./person'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var person_1;
    var person;
    return {
        setters:[
            function (person_1_1) {
                person_1 = person_1_1;
            }],
        execute: function() {
            person = new person_1.Person();
            document.getElementById('content').innerText = person.name;
        }
    }
});
//# sourceMappingURL=main.js.map