function sumOfMultiples(number) {
    if (number <= 0) return 0;
    let list = [];
    
    for (let temp of [...Array(number).keys()]){

        if (!(temp % 3) || !(temp % 5)) {
            list.push(temp);
        }
    }
    
    return list.reduce((accumulator, current) => {
        return accumulator + current;
    }, 0);    
}


console.log(sumOfMultiples(0));
console.log(sumOfMultiples(10));
console.log(sumOfMultiples(-5));
console.log(sumOfMultiples(15));
