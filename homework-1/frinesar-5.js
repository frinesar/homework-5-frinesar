function highAndLow(sequence) {
    let numberList = sequence.split(' ');
    numberList = numberList.map(Number).sort((a, b) => {
        return a - b;
    });
    
    return `${numberList.at(-1)} ${numberList[0]}`;
}


console.log(highAndLow('1 2 3 4 5'));
console.log(highAndLow('5 4 3 2 4 1'));
console.log(highAndLow('1 2 -3 4 5'));
