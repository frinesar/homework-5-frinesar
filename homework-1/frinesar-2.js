function hanoi(n, start, end) {
    let counter = 0;
    inner(n, start, end)
    
    function inner(n, start, end){
        if (n == 1){
            counter++;
        }
        else {
            let other = 6 - (start + end);
            inner(n - 1, start, other);
            inner(n - 1, other, end);
            counter++;
        }
    }
    console.log(counter); 
}


hanoi(3, 1, 3);
