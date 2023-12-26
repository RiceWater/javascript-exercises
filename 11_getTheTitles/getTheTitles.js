const getTheTitles = function(books) {
    let array = [];
    books.map((book) => array.push(book.title));
    return array;
};

// Do not edit below this line
module.exports = getTheTitles;
