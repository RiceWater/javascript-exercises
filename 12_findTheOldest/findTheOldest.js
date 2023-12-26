const findTheOldest = function(persons) {
    for (let i = 0; i < persons.length; i++){
        persons[i].age = getAge(persons[i]);
    }
    return persons.reduce((acc, cv) => (acc.age < cv.age) ? cv : acc);
};

function getAge(person){
    if (person.yearOfDeath != undefined){
        return person.yearOfDeath - person.yearOfBirth;
    }
    return new Date().getFullYear() - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
