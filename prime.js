const MAX_PRIME = 1000000;

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return num > 1;
}
function generatePrime(primeCount) {

    let primes = [];


    while (primes.length < primeCount) {
        //console.log(primes.length);
        let rand = Math.floor(Math.random() * MAX_PRIME);

        if (isPrime(rand) && (primes.length === 0 || primes.indexOf(rand) === -1)) {
            primes.push(rand);
        }
    }
    return primes;
}
// console.log('staring..');
// let count = 2000000;
// let primes = generatePrime(count);
// console.log(`done generating ${count} prime numbers ${primes}`);
//console.log(isPrime(3));
