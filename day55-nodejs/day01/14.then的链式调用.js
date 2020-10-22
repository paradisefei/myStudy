new Promise((resolve, reject) => {//同1
	console.log("1");
	resolve();
  })
	.then(() => {//微1
	  console.log("2");//同2
	  new Promise((resolve, reject) => {//同3
		console.log("3");
		resolve();
	  })
		.then(() => {//微2
		  console.log("4");
		})
		.then(() => {//微4
		  console.log("5");
		}).then(() =>{
			console.log("7");
		});
	})
	.then(() => {//微3
	  console.log("6");
	});
  