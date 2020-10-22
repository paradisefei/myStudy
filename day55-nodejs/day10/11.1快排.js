function quickSort(arr) {
	/* 

    */
   if(arr.length <= 1){
       return arr;
   }
	const baseValueIndex = Math.floor(arr.length / 2);
	const baseValue = arr[baseValueIndex];

	const left = [];
	const right = [];

	arr.forEach((item, index) => {
		if (item < baseValue) {
			left.push(item);
		} else {
			right.push(item);
		}
    });
    return quickSort(left).concat(quickSort(right));
}
quickSort([3,4,64,24,8,6,5,1,0,9]);