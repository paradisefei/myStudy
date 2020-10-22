console.log(1); //同1
new Promise((res, rej) => {
	console.log(2); //同2
	res();
})
	.then(() => {   //微1
		console.log(3); //同4
		Promise.resolve().then(() => {
			console.log(5);//同5
			setTimeout(function() {//宏4
				console.log(6); //
				Promise.resolve().then(function() {
					console.log(7);
				});
				setTimeout(function() { //
					console.log(8);
				}, 0);
			}, 0);
		});
	})
	.then(() => {   //微2
		console.log(4);
	});

new Promise((res) => {
	console.log(19); //同3
	setTimeout(() => {
		console.log(20); //宏1
	}, 0);
});
Promise.resolve().then(() => {  //微3
	setTimeout(() => { //宏5
		Promise.resolve().then(() => {
			console.log(12);
		});
		console.log(13); //
	}, 0);
});
setTimeout(() => {  //宏2
	console.log(9); //
	new Promise((res) => {
		res();  //？
		console.log(10);//
	}).then(() => {
		console.log(11);//
	});
});
setTimeout(() => {  //宏3
	setTimeout(() => {  //宏6
		setTimeout(() => {  //
			Promise.resolve().then(() => {
				console.log(14);
			});
			console.log(15);
		}, 0);
		console.log(16);
	}, 0);
	console.log(17); //
}, 0);
