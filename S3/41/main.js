var bill = [125, 555, 44];
console.log(bill);
function calTip(bill){
    
    var tipResult = new Array;
    if(bill [0]>= 50 && bill [0]<=300){

         tipResult [0] = (0.15 * bill[0]) + bill[0];
         console.log(tipResult);

    }else{

        tipResult [0]= (0.20 * bill[0]) + bill[0];
        console.log(tipResult);
    }

  if(bill [1]>= 50 && bill [1]<=300){

        tipResult [1] = (0.15 * bill[1]) + bill[1];
        console.log(tipResult);

   }else{

       tipResult [1]= (0.20 * bill[1]) + bill[1];
       console.log(tipResult);
   }

   if(bill [2]>= 50 && bill [2]<=300){

    tipResult [2] = (0.15 * bill[2]) + bill[2];
    console.log(tipResult);

}else{

   tipResult [2]= (0.20 * bill[2]) + bill[2];
   console.log(tipResult);
}
}
calTip(bill);