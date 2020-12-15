


const mode = (arr) =>
    arr.reduce(
        (a, b, i, arr) =>
            (arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b),
        null)


const modeArr = (arr1: number[], arr2: number[], arr3: []) => {

    //var arr1 = [1, 2, 3, 4, 5, 6];
    //var arr2 = [1, 2, 3, 4];
    for (let index of arr1) {
        if(arr2.indexOf(index) < 0) {
            arr3.push(index);
        }
    }

    return arr3
}

console.log(modeArr([1, 2, 3, 4, 5, 6], [1, 2, 3, 4], []))
