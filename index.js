const jsdom = require('jsdom');
console.log("start");
const p = new Promise(
    (resolve, reject) => {
        jsdom.env({
            url: "http://www.yahoo.co.jp",
            scripts: ["https://code.jquery.com/jquery.min.js"],
            done: (err, window) => {
                // $ = require("jquery")(window);
                $ = require("jquery-easy-loading")(window);
                resolve($.Loading.defaults);
            }
        });
    }
);
p.then(
    (result) => console.log(result),
    (err) => console.log(err)
);
