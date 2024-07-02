const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    let agesObj = [];
    let ages = [];
    
    people.forEach(person => {
        if (!person.yearOfDeath) { 
            agesObj.push({name: person.name, age: currentYear - person.yearOfBirth});
            ages.push(currentYear - person.yearOfBirth);
        } else {
            agesObj.push({name: person.name, age: person.yearOfDeath - person.yearOfBirth});
            ages.push(person.yearOfDeath - person.yearOfBirth);
        };
    });

    let oldestAge = Math.max(...ages);
    let oldestName = agesObj.find(person => person.age == oldestAge).name;
    return people.find(person => person.name == oldestName);
};

// Do not edit below this line
module.exports = findTheOldest;
