const removeFromArray = function(array, ...args) {
    for (let i = 0; i < args.length; i++){
        array = deleteElement(array, args[i]);
    }
    return arguments[0];
};

function deleteElement(givenArray, numRemove){
    for (let i = 0; i < givenArray.length; i++){
        if (givenArray[i] === numRemove){
            givenArray.splice(i,1);
        }
    }
    return givenArray;
}

// Do not edit below this line
module.exports = removeFromArray;
