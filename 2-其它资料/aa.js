
var app = {
    set: function (attr, val) {
        this[attr] = val;
    }
}

app.set('views', './views');

app.views = 'adf';

function Person() {

    var name = '小明';

    // 
    function sayHi() {

    }

    // 公开的
    this.sayHi = sayHi;
    this.name = name;
}

var abc = new Person();






var str = 'dfad';

var arr = [1, 2, 3];

var obj = {name: '小明'};

var reg = //;

var fn = function (req, res) {}

function sayHi(arg) {
    if(typeof arg == 'function') {
        arg('a', 'b');
    }
}

sayHi(str);

sayHi(arr);

sayHi(obj);

sayHi(fn);