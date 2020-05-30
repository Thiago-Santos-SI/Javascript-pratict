var keys = Object.keys(0);

let values = [];

function test() {
    for (let i = 0; i < keys.length; i++){
        let key = keys[i];
        values[i] = 0[key];
    }

}

function test2() {
    for (var i = 0; i < a.length; i++) {
        if (!a[i]) continue; // P // corpo do laço aqui

    }
}

function defaultFunction() {
    for(var i = 0, len = keys.length; i < len; i++) {
        // o corpo do laço permanece o mesmo
    }
}

console.log(test2())