(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
const fs = require('fs');

    async function getFileByPath(filepath) {
        const res = await new Promise(function (resolve, reject) {
            fs.readFile(filepath, 'utf-8', (err, data) => {
                if (err) return reject(err);
                resolve(data);
            });
        });
        return res;

        /* 		return (function (res){
                    res.then((data) => {
                        // return data;
                        console.log("data:" + data);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                })(res) */
        /* 		const res1 = res.then((data) => {
                    return data;
                    // console.log(data);
                })
                .catch((err) => {
                    console.log(err);
                }); */
    }
    const filepath = './a.txt';
    // getFileByPath(filepath)

    const result = getFileByPath(filepath);
    console.log("result:" + result.PromiseResult)
    result.then((data) => {
        console.log(data);
    })
// console.log(res1)
},{"fs":1}]},{},[2]);
