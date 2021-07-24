const fetch = require("node-fetch");


async function file_get_contents(uri, callback) {
    let res = await fetch(uri),
        ret = await res.text();
    return callback ? callback(ret) : ret; // a Promise() actually.
}

file_get_contents("https://public-inti.s3.sa-east-1.amazonaws.com/maps/test/map-1.svg", console.log);
// or
file_get_contents("https://public-inti.s3.sa-east-1.amazonaws.com/maps/test/map-1.svg")
     .then(ret => console.log(ret));

