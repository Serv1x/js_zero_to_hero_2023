let dolphinScore = calAverage(44,23,71);
let koalaScore = calAverage(65,54,49);
console.log(dolphinScore, koalaScore);

const checkWinner = function(avgDolphins, avgKoalas){
    if(avgDolphins>= 2 * avgKoalas){
        console.log(`Dophins win (${avgDolphins} vs. ${avgKoalas})`);
}else if(avgKoalas>= 2* avgDolphins){
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
}else{
    console.log("No team won...");
}
}

checkWinner(dolphinScore,koalaScore);

checkWinner( 576, 111);

dolphinScore = calAverage(85,54,41);
koalaScore = calAverage(23,34,27);
console.log(dolphinScore,koalaScore);
checkWinner(dolphinScore,koalaScore);
    