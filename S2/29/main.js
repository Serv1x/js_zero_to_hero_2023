let bill = 50;

const reply = bill>=20 && bill <=300 ? "I will tip 15 percent so it will cost " + (bill + (0.15 * bill)) :
 "I will tip 20 percent so it will cost " + (bill + (0.20 * bill));

console.log(reply);