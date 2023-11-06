function bruteForce(number) {
    if (number <= 1) return false;
    let counter = 2;
    while (counter < number){
        if (!(number % counter)) {
            return false;
        }
        counter++;
    }
    return true;
}

console.time('Brute Force');
console.log(bruteForce(2_147_483_647)); // 8.544s
console.timeEnd('Brute Force')


// Аби не перебирати усі числа до number, щоб перевірити чи є дільник,
// можна використати тест Ферма. Якщо n - просте число, то воно задовольняє
// рівняння a^(n-1) % n = 1. a береться рандомно з [2, number - 1].
// Біда - ця тема хибнопозитивна. Виконується швидко, бо всього 5 перевірок,
// але результат є ймовірнісним. 
function isPrime_Fermat(n) {
    if (n <= 1){
        return false;
    }
    else{
        for (let step = 0; step < 5; step++){
            let a = Math.floor(Math.random() * (n - 2) + 2);
            if (a ** (n - 1) % n === 1) {
                continue;
            }
            else {
                return false;
            }
        }
        return true;
    }
}


console.log(10, isPrime_Fermat(10));
console.log(8, isPrime_Fermat(8));
console.log(17, isPrime_Fermat(17)); // Часто отримуємо непросте
console.log(43, isPrime_Fermat(43)); // Дуже часто отримуємо непросте
console.log(2_147_483_647, isPrime_Fermat(2_147_483_647)); // Постійно отримуємо непросте (хоча є таким)


// Ідея: всі дільники простих чисел менші або дорівнюють їх квадратному кореню.
// Всеодно виконується перебір чисел, але порівняно до грубої сили, значно менше
// обчислень. Ми йдемо починаючи з 5 та кроком 6, тобто в найгіршому варіанті
// проходимо sqrt(n) / 6 ітерацій.
function isPrime_Factors(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
  
    if (n % 2 === 0 || n % 3 === 0) return false;
  
    for (let i = 5; i * i <= n; i += 6){
        if (n % i === 0 || n % (i + 2) === 0){
            return false;
        }
    }
    return true;
}


console.time('Checking for divisors');
console.log(isPrime_Factors(2_147_483_647)); // 0.971ms
console.timeEnd('Checking for divisors')
