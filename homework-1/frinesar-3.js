function findNb(m) {
    let [total, n] = [0, 1];
    
    while (total < m){
        total += n ** 3;
        if (total === m){
            return n;
        }
        else {
            n++;
        }
    }

    return -1;
}


console.log(findNb(1071225));
console.log(findNb(91716553919377));
