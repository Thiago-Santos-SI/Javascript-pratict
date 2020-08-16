function calcAge(dateString) {
    var birthday = +new Date(dateString);
    return ~~((Date.now() - birthday) / (31557600000));
}

function f() {
    const checkAge = calcAge('2001/02/01')

    if (checkAge < 16){
        console.log('invalido')
    }else {
        console.log('valido')
    }
}
console.log(f())
