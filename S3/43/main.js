
const kianArray = [
    'Kian',
    'Patel',
    2037 - 2009,
    'student',
    ['Neil','Alicem','Leo']
];

const Kian = {
    firstName: ' Kian',
    lastName : 'Patel',
    age : 2037 - 2009,
    job: 'student',
    friends : ['Neil','Alicem','Leo']
};


const interests = prompt("What do you want to know about Kian?  Choose between firstName. lastName, age , job, and friends");

if(Kian[interests]){
    console.log(Kian[interests]);

}else{
    console.log("Wrong request!! Please choose a valid one");

}

Kian.location = "London";
Kian["email"] = 'manislearning@gmail.com';
console.log(Kian);