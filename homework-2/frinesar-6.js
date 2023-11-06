function getPerimetr(area) {
	let previous_row_indexes = [];
	let perimetr = 0;
	for (let row of area){
		row = row.split('');
		let previous_item = false;
		let current_row_indexes = [];
		for (let [index, item] of row.entries()){
			if (item === 'X'){
				perimetr += 4;
				if (previous_row_indexes.includes(index)){
					perimetr -= 2;
				}
				if (previous_item) {
					perimetr -= 2;
				}
				current_row_indexes.push(index);
				previous_item = true;
			}
			else {
				previous_item = false;
			}
		}
		previous_row_indexes = current_row_indexes;
	}
	return `Total land perimeter: ${perimetr}`;
}


console.log(getPerimetr([
	'XOOXO',
	'XOOXO',
	'OOOXO',
	'XXOXO',
	'OXOOO'
]));

console.log(getPerimetr([
	'XOOO',
	'XOXO',
	'XOXO',
	'OOXX',
	'OOOO'
]));

console.log(getPerimetr([
	'OXO',
	'XXO',
	'XOX'
]));
