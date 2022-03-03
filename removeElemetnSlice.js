
const obj = {
    code: 400,
    message: "Erro ao comprar esta promoção. O evento deve ser selecionado para este tipo de promoção.",
    name: "Bad Request"
}

try {
    const result = JSON.parse(obj.message);
} catch (err) {
    // 👇️ This runs
    console.log('Error: ', err.message);
}

