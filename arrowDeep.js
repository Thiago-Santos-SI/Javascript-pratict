const paramGeneric = "details: Map<String, Integer>, nome: String"
const param = "details: Map<String>, nome: String"

/*
public void literalGenericTypes(Map<List<Integer>, HashMap<String, List<List<Double>>>> crazyParams)
 */

let paramCrazy  = "test: int, crazyMap: HashMap<List<Integer>, HashMap<String, List<List<Double>>>> , test: str"
let paramTeste = "details: Map<String>, nome: String, carro: Map<String, Integer>,carro: Map<String, Integer>"
let string = "HashMap<List<Integer>, HashMap<String, List<List<Double>>>>, test: str"


function isGenericType(string, index) {
    let countLeftArrow = 0;
    let countRightArrow = 0;

    let stringGenericType = ''
    for (let i = index; i < string.length; i++) {
        stringGenericType += string[i]
        if (string[i] === '<') {
            countLeftArrow++;
        }
        if (string[i] === '>') {
            countRightArrow++
        }
        if (countLeftArrow === countRightArrow) {
            for (let stringGenericTypeElement of stringGenericType) {
                if (stringGenericTypeElement === ',') {
                    return {
                        stringGenericType,
                        index: i,
                        isGenericType: 0
                    }
                }
            }
            return {
                stringGenericType,
                index: i,
                isGenericType: 1
            }
        }
    }
}

function countArrow(string) {
    let stringRefatorada = '';
    let checkFirstArrow = 0;

    for (let i = 0; i < string.length; i++) {
        if (!checkFirstArrow) {
            if (string[i] === ',') {
                stringRefatorada += '|'
            } else {
                if (string[i] !== '<') {
                    stringRefatorada += string[i]
                }
            }
        }
        if (string[i] === '<') {
            let objectGenericType = isGenericType(string, i)
            if (objectGenericType.isGenericType) {
                stringRefatorada += objectGenericType.stringGenericType
                i = objectGenericType.index + 1
            }
            checkFirstArrow = 1
        }
        if (checkFirstArrow) {
            stringRefatorada += string[i];
        }

        if (string[i] === '>') {
            checkFirstArrow = 0
        }
    }
    return stringRefatorada
}

function traceLengthForParams(params) {
    let trace = '-'
    for (let i = 0; i < params.length; i++) {
        trace += '-'
    }
    return trace
}

console.log(traceLengthForParams(paramCrazy))
console.log(countArrow(paramCrazy))
console.log(traceLengthForParams(paramTeste))
console.log(countArrow(paramTeste))
console.log(traceLengthForParams(paramTeste))
console.log(countArrow(string))
console.log(traceLengthForParams(string))
console.log(countArrow(paramGeneric))
console.log(traceLengthForParams(paramGeneric))
console.log(countArrow(param))
console.log(traceLengthForParams(param))




//console.log(func.split("|").map(e => e.trim()))

//console.log(isGeneric(paramTeste))