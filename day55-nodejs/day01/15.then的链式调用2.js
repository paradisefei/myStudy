new Promise((resolve, reject) => {
	console.log('1');
	resolve();
})
	.then(() => {//微1
		console.log('2');
		new Promise((resolve, reject) => {
			console.log('3');
			resolve();
		})
			.then(() => {//微2
				console.log('4');
				// return Promise.resolve();
			})
			.then(() => {//微4
				console.log('5');
			});
	})
	.then(() => {//微3
		console.log('6');
	})
	.then(() => {//微5
		console.log('7');
	})
	.then(() => {
		console.log('8');
	});

/* 	new Promise((resolve,reject) => {
		console.log('1外部promise')
		resolve()
	})
	.then(() => {
		console.log('2外部第一个then')
		new Promise((resolve,reject) => {
			console.log('3内部promise')
			resolve()
		})
		.then(() => {
			console.log('4内部第一个then')
			return Promise.resolve()
		})
		.then(() => {
			console.log('5内部第二个then')
		})
	})
	.then(() => {
		console.log('6外部第二个then')
	})
	.then(() => {
		console.log('7外部第三个then')
	})
	.then(() => {
		console.log('8外部第四个then')
	})  */