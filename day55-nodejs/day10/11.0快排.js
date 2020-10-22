/* 
	1.先在数组中找一个值作为基准值
	2.小于该值的数放在左边，大于该值的数放在右边
	3.然后再在左右两个数组中进行同样的操作
	4.当数组中只有一个元素时停止
	
	1.把基准值单独拎出来，最后再加进去
	2.基准值也加到左右的其中一个数组中

*/
function quickSort(arr){
	if(arr.length <= 1){
		return arr;
	}
	const baseValueIndex = Math.floor(arr.length / 2);
	const baseValue = arr.splice(baseValueIndex,1)[0];

	const left = [],right = [];

	arr.forEach((item) => {
		if(item < baseValue) {
			left.push(item);
		}
		else{
			right.push(item);
		}
	})

	return quickSort(left).concat(baseValue,quickSort(right));

}
const res = quickSort([2,3,1,5,1,7,2,4,2,5,9,0,8]);
console.log(res);