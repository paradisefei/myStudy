const fs = require('fs');

async function getFileByPath(filepath) {
	const res = await new Promise(function(resolve, reject) {
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
console.log(result);
// result.then((data)=> {
// 	console.log(data);
// })
// console.log(res1)
