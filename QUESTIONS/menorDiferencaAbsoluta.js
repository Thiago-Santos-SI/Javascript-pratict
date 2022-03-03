let numeros = [2, 4, 6, 10]
let numeros2 = [4, -2, -1, 3]
let numeros3 = [5, -9, -5, 9, 10, 12]

/**
 * escreva uma funcao nextNumbers(numbers) que recebe uma array de inteiros distintos e que calcula
 * a menor diferenca absoluta entre os elementos, e retorna todos os pares que tem essa menor diferanca
 * em ordem crescente, cada par em uma linha separado
 *
 * entrada: [4, 2, 1, 3]
 * saida:
 *         1 2
 *         2 3
 *         3 4
 */
let numeros1 = [4, 2, 1, 3]

function sort(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > numbers[i+1]) {

        }
    }
}


function nextNumbers(numbers) {
    const list = numbers.sort((a, b) => b - a).reverse();

    console.log(list)
    let min = 10000000000001
    for (let i = 0; i < list.length; i++) {



        if (list[i + 1] - list[i] < min) {
            min = list[i + 1] - list[i];
        }
    }
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (list[i] - list[j] === min) {
                console.log(list[j], list[i])
            }
        }
    }
}

nextNumbers(numeros1)