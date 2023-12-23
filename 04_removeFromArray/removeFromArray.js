const removeFromArray = function(givenArray, numRemove) {
    for (let i = 0; i < givenArray.length; i++){
        if (givenArray[i] == numRemove){
            givenArray.splice(i,1);
        }
    }
    return givenArray;
};

// Do not edit below this line
module.exports = removeFromArray;
