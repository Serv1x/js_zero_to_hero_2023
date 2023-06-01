let minimum_score = 100;


dolphin_score1 = 88;
dolphin_score2 = 91;
dolphin_score3 = 200;

koala_score1 = 88;
koala_score2 = 91;
koala_score3 = 200;

dolphin_av = (dolphin_score1 + dolphin_score2 + dolphin_score3)/3;
koala_av = (koala_score1 + koala_score2 + koala_score3)/3


if (koala_av > minimum_score && dolphin_av > minimum_score){


    if(dolphin_av > koala_av){
        console.log("Dolphins have beat the Koalas  by " + (dolphin_av - koala_av) + " and are the champions");
    
    }else if(koala_av > dolphin_av){
        console.log("Koalas have beat the Dolphins  by " + (koala_av - dolphin_av) + " and are the champions")
    }else if(koala_av === dolphin_av){
        console.log("Both teams have a score of "+ koala_av + " so its a draw");
    }



}else if (koala_av < minimum_score && dolphin_av > minimum_score){
    console.log("Dolphins have beat the Koalas and are the champions");
}else if(dolphin_av < minimum_score && koala_av > minimum_score){
    console.log("Koalas have beat the Dolphins and are the champions");
}else if (koala_av < minimum_score && dolphin_av < minimum_score){
    console.log("No one is crowned champions as no team has a score above the minimum score");
}





