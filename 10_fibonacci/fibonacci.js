const fibonacci = function(num) {
    num = Number.parseInt(num);
    if (num < 1) return 'OOPS';
    if (num == 1 || num == 2) return 1;

    const FIVESQRT = Math.sqrt(5);
    const PHI = (FIVESQRT + 1) / 2;
    
    return Math.round((PHI ** num) / FIVESQRT);
};

// Do not edit below this line
module.exports = fibonacci;
