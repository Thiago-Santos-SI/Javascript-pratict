const arr =  [
    {
        amount:100,
        amountWithoutDiscount:null,
        externalPriceId:"35073",
        priceDescription:null,
        externalSpecialPriceId:"40461",
        fees:[
        {
            amount:null,
            code:"convenience",
            label:"Taxa de conveniência"
        }
        ],
        extraAmounts:[
        ],
            quantity:2,
            section:null,
            title:"Inteira"
    },
    {
        amount:100,
        amountWithoutDiscount:null,
        externalPriceId:"35073",
        priceDescription:null,
        externalSpecialPriceId:"40461",
        fees:[
            {
                amount:null,
                code:"convenience",
                label:"Taxa de conveniência"
            }
        ],
        extraAmounts:[
        ],
        quantity:2,
        section:null,
        title:"Inteira"
    },
    {
        amount:100,
        amountWithoutDiscount:null,
        externalPriceId:"35063",
        priceDescription:null,
        externalSpecialPriceId:"40451",
        fees:[
            {
                amount:null,
                code:"convenience",
                label:"Taxa de conveniência"
            }
        ],
        extraAmounts:[
        ],
        quantity:2,
        section:null,
        title:"Inteira"
    },
]

values = arr.filter(function (a) {
    return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
}, Object.create(null))

console.log(values)