// let db =  require("");
let path = require('path');
let db = require( path.resolve( __dirname) );

let getData = {

    stats: function(gender,age,income,race, education){
        let usrAvg =[];
        let usrYes = 0;
        let usrNo = 0;
        db.data.findAll({where: {sex:gender, age:age, racem1:race,inc:income, educ2:education}
        }).then(function (data) {
            console.log(data);
        })
                    }

};
getData.stats(1,2,1,1,2);