let paramCrazy  = "test: int, crazyMap: HashMap<List<Integer>, HashMap<String, List<List<Double>>>> , test: str"
let paramTeste = "details: Map<String>, nome: String, carro: Map<String, Integer>,carro: Map<String, Integer>"
const paramGeneric = "details: Map<String, Integer>, nome: String"
let string = "HashMap<List<Integer>, HashMap<String, List<List<Double>>>>, test: str"


const param = "details: Map<String>, nome: String"

let testObject = [
    {
        id: 1,
        test: paramCrazy,
        esperado: 'test: int| crazyMap: HashMap<List<Integer>, HashMap<String, List<List<Double>>>> | test: str',
    },
    {
        id: 2,
        test: paramTeste,
        esperado: 'details: Map<String>| nome: String| carro: Map<String, Integer>|carro: Map<String, Integer>'
    },
    {
        id: 3,
        test: string,
        esperado: 'HashMap<List<Integer>, HashMap<String, List<List<Double>>>>| test: str'
    },
    {
        id: 4,
        test: paramGeneric,
        esperado: 'details: Map<String, Integer>| nome: String'
    },
    {
        id: 5,
        test: param,
        esperado: 'details: Map<String>| nome: String'
    },
]


/*
public void literalGenericTypes(Map<List<Integer>, HashMap<String, List<List<Double>>>> crazyParams)
 */


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
                        isGenericType: 1
                    }
                }
            }
            return {
                stringGenericType,
                index: i,
                isGenericType: 0
            }
        }
    }
}

function deepArrow(params) {
    let refactorString = ''
    for (let i = 0; i < params.length; i++) {
        if (params[i] === '<') {
            let objectGenericType = isGenericType(params, i)
            if (objectGenericType.isGenericType) {
                refactorString += objectGenericType.stringGenericType
                i = objectGenericType.index + 1
            }
        }
        if (params[i] === ',') {
            refactorString += '|'
        } else {
            if (params[i] !== '<' && params[i] !== undefined) {
                refactorString += params[i]
            }
        }
    }
    return refactorString
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
            if (string[i] === ',') {
                stringRefatorada += '|'
            } else {
                if (string[i] !== undefined) {
                    stringRefatorada += string[i]
                }
            }
        }
    }
    return stringRefatorada
}

function traceLengthForParams(params) {
    let trace = '-'
    for (let i = 0; i < 130; i++) {
        trace += '-'
    }
    return trace
}

function testUnitCase() {
    testObject.map(teste => {
        if (countArrow(teste.test) === teste.esperado){
            console.log(traceLengthForParams(teste.test))
            console.log("test: ", teste.test)
            console.log("compared: ", countArrow(teste.test))
            console.log("resultado esperado: ", teste.esperado)
            console.log('\033[32m' + true + " - TEST PASSED!")
            console.log("\033[0m")
        } else {
            console.log(traceLengthForParams(teste.test))
            console.log("test: ", teste.test)
            console.log("compared: ", countArrow(teste.test))
            console.log("resultado esperado: ", teste.esperado)
            console.warn("\033[31m" + false + ' - TEST NOT PASSED')
            console.log("\033[0m")
        }
    })

}
testUnitCase()



//console.log(func.split("|").map(e => e.trim()))

//console.log(isGeneric(paramTeste))