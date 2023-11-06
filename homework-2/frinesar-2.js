function getEqualSumIndex(list) {
	function sumOfArray(list) {
		return list.reduce((a, b) => {
			return a + b;
		}, 0);
	}

	for (let [index] of list.entries()){
		if (sumOfArray(list.slice(0, index)) === sumOfArray(list.slice(index + 1, list.lenght))){
			return index;
		}
	}
	return -1;
}


console.log(getEqualSumIndex([1,2,3,4,3,2,1]));
console.log(getEqualSumIndex([1,100,50,-51,1,1]));
console.log(getEqualSumIndex([20,10,-80,10,10,15,35]));
