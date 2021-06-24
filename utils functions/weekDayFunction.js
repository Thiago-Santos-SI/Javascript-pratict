const { format } = require('date-fns')
const { ptBR } = require('date-fns/locale/pt-BR')
const isBefore = require('date-fns/isBefore')
const parseISO = require('date-fns/parseISO')

function isFuture(date) {
    if (!date) {
        return false;
    }

    console.log(parseISO(date), new Date())
    const dateBefore = isBefore(parseISO(date), new Date());

    return dateBefore;
}

console.log(isFuture('2022-11-27 18:00:00'))