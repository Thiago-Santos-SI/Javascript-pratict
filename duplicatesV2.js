const url = 'localhost:3005/evento/evento-ga-com-valores-extras/2022-12-10%2010:00'
const urlC = 'localhost:3005/categorias/nBMr7EMxcV7BRnHP/evento-teste-ga'
const urlP = 'http://localhost:3005/promocoes/A1aWFrqqgZj3l935qR3e/evento-ga-com-valores-extras/2022-12-03%2010:00'

function countBarUrlPromotions(completeUrl, index) {
    let string = ''
    let countBar = 0;
    for (let i = index; i < completeUrl.length; i++) {
        if (completeUrl[i] === '/') {
            countBar += 1
        }
        string += completeUrl[i]
    }
    return countBar >= 3;
}

function checkEvent(splitUrl, completeUrl, index) {
    const hrefs = ['evento']

    let string = '';
    for (const urlElement of splitUrl) {
        string += urlElement
    }
    if (string === 'promocoes') {
        if (countBarUrlPromotions(completeUrl, index)) {
            return true
        }
    }
    const foundHref = hrefs.find(href => {
        if (href === string) {
            return true
        }
    })
    return !!foundHref;

}
function checkURL(url) {
    let splitUrl = []
    for (let i = 0; i < url.length; i++) {
        url[i] === '/' ? null : splitUrl.push(url[i])
        if (url[i] === '/') {
            if (checkEvent(splitUrl, url, i)) {
                return true
            } else {
                splitUrl = []
            }
        }
    }
    return false
}

console.log(checkURL(urlP))