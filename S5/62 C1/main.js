"use strict";

var temp = [17, 21, 23];

function printForecast(arr) {
  let str = "";

  for (let i = 0; i < temp.length; i++) {
    str = str + `${temp[i]}C in ${i + 1} days...`;
  }
  console.log(str);
}

printForecast(temp);
