const repeatString = function(str, num) {
    if (Number(num) < 0){
        return 'ERROR';
    }

    let output = '';
    for (let i = 0; i < Number(num); i++){
        output = output.concat(str);
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
