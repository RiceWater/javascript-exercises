const fibonacci = function(num) {
    num = Number.parseInt(num);
    if (num < 1) return 'OOPS';
    if (num == 1 || num == 2) return 1;

    let prev = 1, curr = 1, tmp = 0;
    for (let i = 3; i <= num; i++){
        tmp = curr;
        curr += prev;
        prev = tmp;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
