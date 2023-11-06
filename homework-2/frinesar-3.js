function groupAnagrams(listOfWords) {
	let sortedWords = listOfWords.map(item => {
		return item.split('').sort().join('');
	});

	const indexes = {};
	sortedWords.forEach((element, index) => {
		if (!indexes[element]) {
			indexes[element] = [index];
		}
		else {
			indexes[element].push(index);
		}
	});
	
	let anagrams = [];
	for (let key in indexes){
		let occurrences = [];
		indexes[key].forEach(index => {
			occurrences.push(listOfWords[index]);
		});
		anagrams.push(occurrences);
	} 
	return anagrams;
}


console.log(groupAnagrams(['tsar', 'rat', 'tar', 'star', 'tars', 'cheese']));
