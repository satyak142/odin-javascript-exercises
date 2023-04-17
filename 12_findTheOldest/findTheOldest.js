const findTheOldest = function(people) {
    let ageAlive = people.map( p => {
        if(typeof(p.yearOfDeath) === 'undefined'){
            p.yearOfDeath = new Date().getFullYear();
        }
        return p.yearOfDeath - p.yearOfBirth ;
    })

    const index = ageAlive.indexOf(Math.max(...ageAlive));

    return people[index] ;
};

// Do not edit below this line
module.exports = findTheOldest;
