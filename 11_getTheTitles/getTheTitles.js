const getTheTitles = function(books) {
    let array = [];
    for (let i = 0; i < books.length; i++){
        array.push(books[i].title);
    }
    return array;
};

// Do not edit below this line
module.exports = getTheTitles;
