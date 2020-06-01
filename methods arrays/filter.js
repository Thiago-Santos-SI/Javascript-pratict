/*
O método filter() retorna um array contendo um subconjunto dos elementos do array em que é
chamado. A função passada para ele deve ser um predicado: uma função que retorna true ou false.
O predicado é chamado exatamente como para forEach() e map(). Se o valor de retorno é true ou um
valor que se converte em true, então o elemento passado para o predicado é membro do subconjunto
e é adicionado no array que se tornará o valor de retorno. Exemplos:
 */

a = [5, 4, 3, 2, 1];


smallvalues = a.filter(
    function(x) {
        return 3 > x
    });
/**
 * 3 > 5? -> 3 > 4? -> 3 > 3? -> 3 > 2? -> 3 > 1?
 *                                  ↓         ↓
 *                                  2         1
 */

console.log(smallvalues)

a = [5, 4, 3, 2, 1];

everyother = a.filter(
    (x, i) => {
        return i % 2 == 0
        /**
         *  a = [x, i, x, i, x];
         *
         *  5 % 2 = 0? -> 4 % 2 = 0? -> 3 % 2 = 0? -> 2 % 2 = 0? -> 1 % 2 = 0?
         *                  ↓                           ↓
         *                  0                           0
         *
         *   RESULT IS [5 , 3, 1]
         */
    })

console.log(everyother)

