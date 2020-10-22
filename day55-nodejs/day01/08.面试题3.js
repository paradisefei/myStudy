
setTimeout(() => {
    console.log('1') //宏1
}, 0)

new Promise((resolve) => {
        console.log('2') //同1
        resolve()
    })
    .then(() => {
        console.log('3') //微1
    })
    .then(() => {
        console.log('4') //微2
    })

console.log('5') //同2