const palindromes = function (words) {
    words = words.toLowerCase();
    let left = 0, right = words.length - 1;
    while (left < right){
        left = reAdjustLeftSide(words, left);
        right = reAdjustRightSide(words, right);
        if (words[left] != words[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;


    // let string = words.toLowerCase().replace(/[^a-z0-9]/g, "");
    // return string.split("").reverse().join("") == string;
};

function reAdjustLeftSide(words, left){
    while(true){
        if (!isAlphanumeric(words.charCodeAt(left))){
            left++;
        }
        else{
            break;
        }
    }
    return left;
}

function reAdjustRightSide(words, right){
    while(true){
        if (!isAlphanumeric(words.charCodeAt(right))){
            right--;
        }
        else{
            break;
        }
    }
    return right;
}

function isAlphanumeric(code){
    if (!(code > 47 && code < 58) &&    // 0 to 9
        !(code > 64 && code < 91) &&    // A to Z
        !(code > 96 && code < 123)){    // a - z
        return false;
    }
    return true;
}

// Do not edit below this line
module.exports = palindromes;
