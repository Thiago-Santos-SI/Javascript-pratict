const { format } = require('date-fns')
const { ptBR } = require('date-fns/locale/pt-BR')

const data_atual = format(new Date, 'dd/MM/yyyy', { locale: ptBR })

function dia_semana(data) {
    const semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const arr = data.split('/').reverse();
    const teste = new Date(arr[0], arr[1] - 1, arr[2]);
    const dia = teste.getDay();
    return semana[dia]
}

console.log(dia_semana(data_atual))
