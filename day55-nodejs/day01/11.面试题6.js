setTimeout(() => {
	console.log(4);  //宏1
}, 0);

new Promise((resolve) => {
	console.log(1);  //同1
	for (let i = 0; i < 10000; i++) {
		i == 9999 && resolve();
	}
	console.log(2);  //同2
}).then(() => {
	console.log(5);  //微1
});

console.log(3);  //同3
