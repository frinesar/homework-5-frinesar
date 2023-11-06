function chooseLeader(seats, day) {
	let totalScore = [];
	for (let i = 0; i < (seats.length / day); i++){
		let localScore = 0;
		for (let j = i; j < seats.length; j+=(seats.length / day)){
			localScore += seats[j];
		}
		totalScore.push(localScore);
	}
	return Math.max(...totalScore);
}


console.log(chooseLeader([1, 2, 3, 4], 2));
console.log(chooseLeader([1,5,6,3,4,2], 3));
console.log(chooseLeader([1, 1, 0], 1));
console.log(chooseLeader([9,10,2], 3));
console.log(chooseLeader([-2,-1,-2,-2], 2));
