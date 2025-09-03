import React from 'react';

function PrimeCalculator() {
    const [selectedNum, setSelectedNum] = React.useState(100);
    
    const allPrimes = [];
    for (let counter = 2; counter <= selectedNum; counter++) {
        if (isPrime(counter)) {
            allPrimes.push(counter);
        }
    }

    return (
        <>
            <form>
                <label htmlFor="num">Your number:</label>
                <input 
                    type="number" 
                    value={selectedNum} 
                    onChange={(event) => {
                        let num = Math.min(100_000, Number(event.target.value));
                        setSelectedNum(parseInt(num));
                    }} 
                />
            </form>
            <p>
                All primes up to {selectedNum}:
                <span className="prime-list">
                    {allPrimes.join(', ')}
                </span>
            </p>
        </>
    );
}

function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;

    const max = Math.ceil(Math.sqrt(n));

    for (let i = 2; i <= max; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

export default React.memo(PrimeCalculator);

