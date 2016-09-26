import gt = require('./app') 

require([], () => {
    // code from window.onload
    var el = document.getElementById('content');
    var greeter = new gt.Greeter(el);
    greeter.start();
});