let paramCrazy = "test: int, crazyMap: HashMap<List<Integer>, HashMap<String, List<List<Double>>>> , test: str"
let paramTeste = "details: Map<String>, nome: String, carro: Map<String, Integer>,carro: Map<String, Integer>"
const paramGeneric = "details: Map<String, Integer>, nome: String"
let string = "HashMap<List<Integer>, HashMap<String, List<List<Double>>>>, test: str"

let paramCrazyERROR = "test: int, crazyMap: HashMap<List<Integer>, HashMap<String, List<List<Double>>>> , test: str"

const param = "details: Map<String>, nome: String"
const paramERROR = "teste2: Map<str, ArrayList<Str>>>"

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

function semanticAnalysis(GenericType) {
    let countLeftArrow = 0;
    let countRightArrow = 0;

    for (const stringGenericTypeElement of GenericType) {
        if (stringGenericTypeElement === '<') {
            countLeftArrow++;
        }
        if (stringGenericTypeElement === '>') {
            countRightArrow++
        }
    }
    if (countLeftArrow === (countRightArrow + 1)) {
        throw new Error('missing ending ' > '')
    }
    if (countRightArrow > (countLeftArrow + 2)) {
        throw new Error('unbalanced or strange char (">")')
    }
    if (countRightArrow > countLeftArrow) {
        throw new Error('unbalanced or strange char (">")')
    }
}


function isGenericType(string, index) {
    let countLeftArrow = 0;
    let countRightArrow = 0;

    let stringGenericType = ''
    for (let i = index; i < string.length; i++) {
        stringGenericType += string[i]
        if (string[i] === '<') {
            countLeftArrow++;
        }
        let count = -3;
        if (string[i] === '>') {
            countRightArrow++
            if (string[i + 1] === '>') {
                for (let j = 1; j < countLeftArrow + 3; j++) {
                    if (string[i + j] === '>') {
                        stringGenericType += string[i + j]
                        count += j;
                    } else {
                        semanticAnalysis(stringGenericType)
                        i = i + count
                        return {
                            stringGenericType,
                            index: i,
                        }
                    }
                }

            }
        }
        if (countLeftArrow === 1 && countRightArrow === 1) {
            return {
                stringGenericType,
                index: i,
            }
        }
    }
}

function countArrow(string) {
    let stringRefactored = '';
    let checkFirstArrow = 0;

    for (let i = 0; i < string.length; i++) {
        if (!checkFirstArrow) {
            if (string[i] === ',') {
                stringRefactored += '|'
            } else {
                if (string[i] !== '<') {
                    stringRefactored += string[i]
                }
            }
        }
        if (string[i] === '<') {
            const objectGenericType = isGenericType(string, i)
            stringRefactored += objectGenericType.stringGenericType
            i = objectGenericType.index + 1
            checkFirstArrow = 1
        }
        if (checkFirstArrow) {
            if (string[i] === ',') {
                stringRefactored += '|'
            } else {
                if (string[i] !== undefined) {
                    stringRefactored += string[i]
                }
            }
        }
    }
    return stringRefactored
}

//console.log(countArrow(paramCrazyERROR))


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

