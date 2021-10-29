let string = 'anilina';

function palindromo(string) {
    let piece1 = '';
    let piece2 = '';


    for (let i = 0; i < string.length; i++) {
        if (i >= string.length / 2) {
            piece1 += string[i]
        } else {
            piece2 += string[i]
        }
    }
    console.log(piece2)
    console.log(piece1)
    if (piece1.split('').reverse().join('') === piece2) {
        return true
    } else {
        return false
    }
}

console.log(palindromo(string))
