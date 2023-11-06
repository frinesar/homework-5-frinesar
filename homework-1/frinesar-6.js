function getBiggestNumber(number) {
    let splittedNumber = [];
    for (let digit of String(number)){
        splittedNumber.push(digit);
    }
    splittedNumber.sort((a, b) => {
        return b - a;
    });
    
    return Number(splittedNumber.join(''));
}


console.log(getBiggestNumber(45));
console.log(getBiggestNumber(0));
console.log(getBiggestNumber(123456));
console.log(getBiggestNumber(5555444));
