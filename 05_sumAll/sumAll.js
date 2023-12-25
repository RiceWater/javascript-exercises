const sumAll = function(start, end) {
    if (typeof(start) != 'number' || typeof(end) != 'number' ||
    start < 0 || end < 0){
        return "ERROR";
    }

    if (start > end){
        let tmp = start;
        start = end;
        end = tmp;
    }

    let startSum = GaussFormula(start);
    let endSum = GaussFormula(end);
    return endSum - startSum + start;
};

function GaussFormula(num){
    return num * (num + 1) / 2;
}
// Do not edit below this line
module.exports = sumAll;
