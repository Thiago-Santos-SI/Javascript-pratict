const arr = [1,2,3,4,10,1]

let a
arr.forEach(item => {
    if (item === 10) {
        a = true
    }
})

console.log(a)
