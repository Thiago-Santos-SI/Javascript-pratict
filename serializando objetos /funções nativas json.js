o = {x:1,
    y:{
        z:[
            false,
            null,
            ""
        ]
    }
};
// Define um objeto de teste

const s = JSON.stringify(o);
console.log(s)
// s é '{"x":1,"y":{"z":[false,null,""]}}'

const p = JSON.parse(s);
console.log(p)
// p é uma cópia profunda de o