/**
 * reduce() recebe dois argumentos. O primeiro é a função que efetua a operação de redução. A tarefa
 * dessa função de redução é combinar de algum modo ou reduzir dois valores a um único e retornar esse
 * valor reduzido. Nos exemplos anteriores, as funções combinam dois valores somando-os,
 * multiplicando-os e escolhendo o maior. O segundo argumento (opcional) é um valor inicial a ser
 * passado para a função.
 *
 */

var a = [1,2,3,4,5]

var sum = a.reduce(
    function(x,y) {
        return x+y
    }, 0);

console.log(sum)

var product = a.reduce(
    function(x,y) {
        return x*y
    }, 1);

console.log(product)

var max = a.reduce(
    function(x,y) {
        return (x>y) ? x : y;
        //x é maior que y? se sim faça x, se não faça y
        // 1>2? -> 1>3? -> 1>4? -> 1>5?
        // 5
    },6);

console.log(max)

