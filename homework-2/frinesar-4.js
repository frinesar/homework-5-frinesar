function unpack(truck) {
	let goods = [];
	for (let package of truck){
		for (let good of package){
			if (!(good[0] === '[' && good.at(-1) === ']')) continue;
			good = good.replace(/\[|\]/g, '');
			if (good.length === 4){
				let firstElement = good[0];
				if (Array(...good).every(item => item === firstElement)){
					goods.push(good.split('').join(' '));
				}
			}
		}
	}
	return goods.filter((element, index) => (index + 1) % 5 !== 0).join(' ');
}


console.log(unpack([['(----)', '[IIII]', '_HHH_'], ['IuI', '[))))]', 'zz'], ['[@@@@]', 'UwU', '[IlII]']]));
console.log(unpack([ [ '(-)', '[IIII]', '[))))]' ], [ 'IuI', '[llll]' ], [ '[@@@@]', 'UwU', '[IlII]' ], [ 'IuI', '[))))]', 'x' ], [] ]));
console.log(unpack([['[IIII]', '[llll]', '[1111]', '[@@@@]', '[||||]', '[║║║║]']]));
console.log(unpack([
	[],
	[],
	[ 'k' ],
	[ '1337', 'IIII', '(IIII)', '[IIiI]', '[))))]' ],
	[ '[@@]' ],
	[ '[llll]' ],
	[ '[))))]', '(IIII)', '[║║║║║]', '(----)', '[¦¦¦¦]', 'GoOoOo' ],
	[ 'zz', 'IIII', 'X', '_HHH_', '[¦¦-¦]', '¨¨¨¨¨¨¨¨', '_HHH_' ],
	[ '(IIII)', 'OoOoOoO', '[@@]', 'IuI', '[1111]' ],
	[
		'(@@@@)', '[║║║║║]',
		'[111@]', '[1111]',
		'(@@@@)', 'FUDGE',
		'[111@]'
	],
	[ '[llll]', 'zz', '*-*' ],
	[
		'*-*',    '[IIII]',
		'1337',   '[111@]',
		'[i|||]', '[111@]',
		'[IIII',  '1337'
	],
	[ '[))1)]' ],
	[
		'[1111]', '[111@]',
		'[IIiI]', 'k',
		'*-*',    '[@@]',
		'[jlll]'
	],
	[ 'UwU', '*-*', '[¦¦¦¦]', '[)(((]' ],
	[ '[((((]', '¨¨¨¨¨¨¨¨' ],
	[ '[))))]' ],
	[ '1337', 'X' ],
	[ '[))))]', '[llll]', '[@@]', 'GoOoOo', 'X', '1337' ],
	[
		'OoOoOoO', '_HHH_',
		'(@@@@)',  'IuI',
		'LARD',    '[¦¦-¦]',
		'[@@@@]',  '[IIII]'
	],
	[ '[jlll]' ],
	[ 'OoOoOoO', '[111@]', '[jlll]' ],
	[ '[IIII', '[jlll]', '(iiii]', 'k', '1337', '[))))]' ],
	[ '[║║║║]' ],
	[ '[jlll]', 'IIII' ],
	[],
	[ 'X', '[i|||]', 'OoOoOoO' ],
	[],
	[],
	[ '(IIII)', 'zz' ]
]));
