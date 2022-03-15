const cenario1 = ['teste', null, null, null]
const cenario2 = ['teste', 'esperanca', null, null]
const cenario3 = ['teste', 'esperanca', '2020-01-01', '2022-12-12']

const searchObject = {
    search: 'teste',
    city: null,
    // eslint-disable-next-line @typescript-eslint/camelcase
    date_interval_start: null,
    // eslint-disable-next-line @typescript-eslint/camelcase
    date_interval_end: null,
};

function checkFourParams(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            break
        }
        count += 1
    }
    return count === 4;
}

function checkSearchParams(searchObject) {
    if (searchObject.search) {
        if (searchObject.city) {
            if (searchObject.date_interval_start) {
                console.log('all')
            } else {
                console.log('search and city')
            }
        } else {
            console.log('just search')
        }
    }
}


