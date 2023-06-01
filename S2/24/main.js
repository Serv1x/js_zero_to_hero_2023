const hasDriversLicence = false;
const hasGoodVision = true;

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence|| hasGoodVision);

console.log(!hasDriversLicence);

if(hasDriversLicence && hasGoodVision){
    console.log('Kian can drive');
}else{
    console.log('not good enough');
}