const url = 'http://localhost:3005/evento/evento-ga-com-valores-extras/2022-12-10%2010:00'

function checkEvent(splitUrl) {
    const hrefs = ['categorias', 'evento', 'promocoes']

    let string = '';
    for (const urlElement of splitUrl) {
        string += urlElement
    }
    const foundHref = hrefs.map(href => {
        if (href === string) {
            return true
        }
    })
    return !!foundHref;

}
function checkURL() {
    let splitUrl = []
    for (const urlElement of url) {
        urlElement === '/' ? null : splitUrl.push(urlElement)
        if (urlElement === '/') {
            if (checkEvent(splitUrl)) {
                return true
            } else {
                splitUrl = []
            }
        }
    }
    return false
}

console.log(checkURL(url))