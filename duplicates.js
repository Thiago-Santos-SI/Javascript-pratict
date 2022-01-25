const arrr = [
    {
        amount: 600,
        amountWithoutDiscount: null,
        externalPriceId: "33066",
        externalSpecialPriceId: "38601",
        extraAmounts: [],
        priceDescription: "Leve seu ingresso para liberar acesso",
        quantity: 94,
        section: "VIP",
        title: "Inteira",
    },
    {
        amount: 600,
        amountWithoutDiscount: 700,
        externalSpecialPriceId: "38601",
        priceDescription: "Leve seu ingresso para liberar acesso",
        quantity: 94,
        section: "VIP",
        title: "Inteira",
    },
    {
        amount: 600,
        amountWithoutDiscount: null,
        id: "38603",
    },
    {
        amount: 300,
        amountWithoutDiscount: 800,
        id: "38603",
    },
    {
        amount: 600,
        amountWithoutDiscount: null,
        id: "38605",
    },
    {
        amount: 600,
        amountWithoutDiscount: null,
        id: "38605",
    },
    {
        amount: 600,
        amountWithoutDiscount: null,
        id: "38605",
    },
]

const arr = [
    {place: "here",  name: "x", other: "other stuff1" },
    {place: "there", name: "x", other: "other stuff2" },
    {place: "here",  name: "y", other: "other stuff4" },
    {place: "here",  name: "z", other: "other stuff5" }
]

function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}

const arr1 = getUniqueListBy(arrr, 'externalSpecialPriceId')

console.log("Unique by place")
console.log(JSON.stringify(arr1))

console.log(arr1)