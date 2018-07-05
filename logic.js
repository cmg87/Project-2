let db = require("./models");
let Sequelize = require('sequelize');
const Op = Sequelize.Op;
let getData = {

    stats: function (gender, age, income, race, education) {
        // let usrAvg = [];
        // let usrYes = 0;
        // let usrNo = 0;
        if(age = 25){
            age = {[Op.between]: [18, 30]};
        }
        db.data.findAll({
            where: {sex: gender, age: age, inc: income, racem1: race, educ2: education}
        }).then(function (data) {
            // console.log(data);
            let user = [];
            user.push(eminuse(data));
            console.log(user);
        });

    }

};

getData.stats(1, 25, 6, 1, 6);

let eminuse = function (data) {
    let usrYes=0;
    let usrNo=0;
    for(let x in data){
        if(data[x].eminuse == 1){
            usrYes++;
        }else{
            usrNo++;
        }
    }
    let total = usrNo + usrYes;
    return({'eminuse': {'1':  parseInt((usrYes/total)*100), '2' :parseInt((usrNo/total)*100)}});
};

let intmob = function (data) {
    let usrYes=0;
    let usrNo=0;
    for(let x in data){
        if(data[x].intmob == 1){
            usrYes++;
        }else{
            usrNo++;
        }
    }
    let total = usrNo + usrYes;
    return({'intmob': {'1':  parseInt((usrYes/total)*100), '2' :parseInt((usrNo/total)*100)}});
};

module.exports = getData;