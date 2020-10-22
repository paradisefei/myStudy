console.log(1);     //同1
new Promise(function(resolve) {
	resolve();
	console.log(2);     //同2
	setTimeout(function() {     //宏1
		console.log(3); 
	}, 0);
	Promise.resolve().then(function() {             //微1
		console.log(4);     //同4
		setTimeout(function() {     //宏3
			console.log(5);
		}, 0);
		setTimeout(function() {         //宏4
			(async function() {
				console.log(6); //
				return function() {
					console.log(7); 
				};
			})().then(function(fn) {    //
				console.log(8);
				fn();
			});
		}, 0);
	});
	new Promise(function(resolve) {
		console.log(9);     //同3
		resolve();
	}).then(function() {                //微2
		new Promise(function(resolve, reject) {
			console.log(10);       //同5
			reject();
		})
			.then(function() {
				setTimeout(function() {
					console.log(11);
				}, 0);
				console.log(12);
			})
			.catch(function() {
				console.log(13);    //微3
			});
	});
});
setTimeout(function() {         //宏2
	console.log(15);
	Promise.resolve().then(function() {
		console.log(16);
	});
}, 0);
