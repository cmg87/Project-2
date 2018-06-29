const data  = require('../data.json');

// console.log(data[0].intfreq);
let arr = [];
let total = 0;
let other = 0;
for(i in data){
    // arr.push(data[i].intfreq);
    if(data[i].intmob == 1){
        total ++;
    }
    if else{
        other ++;
    }
}
// console.log(arr);
console.log(total, other);