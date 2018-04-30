//Reading Chapter8

var call_counter = require('./call_counter');

function multiply(x,y) {
    call_counter();
    return x * y;
}

function divide(x, y) {
    call_counter();
    return x / y;
}

function fibo(count) {
    call_counter();
    return private_Fibo(count);
}

function private_Fibo(count, counter, first, second) {
    if (count == 0) return 0;
    if (counter == undefined) {
        counter = 1;
        first = 1;
        second = 2;
    }
    var result = first + second;
    if (counter == count) return result;
    private_Fibo(count, ++counter, second, result);
    return result;
}

module.exports = {
    multiplication: multiply,
    division: divide,
    fibonacci: fibo
}