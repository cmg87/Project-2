let db = require("./models");

let getData = {

    stats: function (gender, age, income, race, education) {
        let usrAvg = [];
        let usrYes = 0;
        let usrNo = 0;
        db.data.findAll({
            where: {sex: gender, age: age, racem1: race, inc: income, educ2: education}
        }).then(function (data) {
            // console.log(data);
            for(let x in data){
                if(data[x].eminuse == )
            }
        })

    }

};

getData.stats(1, 2, 1, 1, 2);