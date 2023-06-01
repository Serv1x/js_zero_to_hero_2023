const calAge3 = birthYear => 2037 - birthYear;
const age3 = calAge3(1991);
console.log(age3);




const yearsUntilRetirement = (birthYear,firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return statment;
    return `${firstName} retires in ${retirement} years`;

}

console.log(yearsUntilRetirement(2009, "Kian"));
console.log(yearsUntilRetirement(1991, "Raj"));

