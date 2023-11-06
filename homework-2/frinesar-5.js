const object = {
	'one': {
		'nest1': {
			'val1': [9, 34, 92, 100]
		}
	},
	'2f7': {
		'n1': [10, 92, 53, 71],
		'n2': [82, 34, 6, 19]
	}
};


const object2 = {
	'r1n': {
		'mkg': {
			'zma': [21, 45, 66, 111],
			'mii': {
				'ltf': [2, 5, 3, 9, 21]
			},
			'fv': [1, 3, 6, 9]
		},
		'rmk': {
			'amr': [50, 50, 100, 150, 250]
		}
	},
	'fik': {
		'er': [592, 92, 32, 13],
		'gp': [12, 34, 116, 29]
	}
};


function getRootProperty(object, integer) {
	let found;
	for (let key in object){
		if (typeof object[key] === 'object' && !(Array.isArray(object))){
			if (getRootProperty(object[key], integer)){
				found = key;
				break;	
			} 
		}
		else if (Array.isArray(object) && object.includes(integer)){
			return object;
		}
	}
	return found || null;
}


console.log(getRootProperty(object, 9)); //=> "one"
console.log(getRootProperty(object2, 250)); //=> "r1n"
console.log(getRootProperty(object2, 116)); //=> "fik"
console.log(getRootProperty(object2, 111)); //=> "r1n"
console.log(getRootProperty(object, 999)); //=> null
