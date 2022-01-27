let arr = ['thiago','andre','wendell','leticia','igor']

const index =  arr.findIndex(item => item === 'andre');

console.log(index)

arr.splice(index, index);

console.log(arr)
