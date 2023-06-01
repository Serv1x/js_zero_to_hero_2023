const age = 17;


if(age >= 18){
    console.log("You can start driving ")
}else {
    console.log("You can't drive yet")
    const yearLeft = 18 - age;
    console.log("You have " + yearLeft + " years left ")
} 
let birthYear = 2001
let century
if(birthYear<= 2000) {
    century = 20;

}else{
     century = 21;
}

console.log(century);