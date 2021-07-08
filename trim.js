const paramGeneric = "details: Map<String, Integer>, nome: String"
const param = "details: Map<String>, nome: String"
const paramTeste = "details: Map<String>, nome: String, carro: Map<String, Integer>,carro: Map<String, Integer>"

const paramCrazy  = "test: int, crazyMap: HashMap<List<Integer>, HashMap<String, List<List<Double>>>> , test: str"

function isGeneric(param) {
    count = '';
    let checkFirstArrow = false;
    for (let paramTesteElement of param) {
        if (!checkFirstArrow) {
            if (paramTesteElement === ',') {
                count += '|'
            } else {
                count += paramTesteElement
            }
        }
        if (paramTesteElement === '<') {
            checkFirstArrow = true
        }
        if (checkFirstArrow) {
            if (paramTesteElement !== '<') {
                count += paramTesteElement;
            }
        }

        if (paramTesteElement === '>') {
            checkFirstArrow = false
        }
    }
    return count;
}

const func =  isGeneric(paramCrazy)

console.log(func.split("|").map(e => e.trim()))



//console.log(isGeneric(paramTeste))