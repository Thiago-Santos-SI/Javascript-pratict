let string = '/busca?url=null%2Fnull%2F2022-03-07%2F2022-04-02'

function extractedTermsUrl(string) {
    string += '%'
    let stringBuilder = ''
    let collectionTerms = []
    for (let i = 11; i < string.length; i++) {
        if (string[i] !== '%') {
            stringBuilder += string[i]
        } else {
            collectionTerms.push(stringBuilder)
            i += 2
            stringBuilder = ''
        }
    }
    return collectionTerms
}


console.log(extractedTermsUrl(string))