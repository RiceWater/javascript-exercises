const removeFromArray = function() {
    for (let i = 1; i < arguments.length; i++){
        arguments[0] = deleteElement(arguments[0], arguments[i]);
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
