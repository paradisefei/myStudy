process.nextTick(() => {
	console.log(1); //微0
});

setTimeout(() => {
	console.log(2); //宏1
}, 0);
setImmediate(() => {
	console.log(3); //宏2
});

const promise1 = Promise.resolve(); //同1
const promise2 = Promise.resolve(); //同2

promise1
	.then(() => {
		//微1
		console.log(4);
				process.nextTick(() => {       //如果在微任务中创建process.nextTick()的微任务，则该process.nextTick()会被放到原本的微任务队列中
			console.log(5);
        });
/* 		Promise.resolve().then(() => {//微6
			//如果微任务中创建的是其它微任务，则会直接执行
			console.log(5);
		}); */
		setTimeout(() => {
			//宏3
			console.log(6);
		}, 0);
	})
	.catch(() => {
		//微2
		console.log(7);
	})
	.then(() => {
		//微3
		console.log(8);
		setImmediate(() => {
			//宏4
			console.log(9);
		});
	})
	.catch(() => {
		//微4
		console.log(10);
	});
promise2.then(() => {
	//微5
	console.log(11);
});
