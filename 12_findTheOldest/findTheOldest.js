const findTheOldest = function(people) {
    return people.reduce((a, b) => {
        if (!a.yearOfDeath) a.yearOfDeath = new Date().getFullYear();
        if (!b.yearOfDeath) b.yearOfDeath = new Date().getFullYear();
        aAge = a.yearOfDeath - a.yearOfBirth;
        bAge = b.yearOfDeath- b.yearOfBirth;
        return aAge < bAge ? b : a; 
    });
};

// Do not edit below this line
module.exports = findTheOldest;
