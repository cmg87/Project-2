let db = require("./models");
let Sequelize = require('sequelize');
const Op = Sequelize.Op;
let getData = {

    stats: function (gender, age, income, race, education) {
        //switch function for defining the age range of each user
        switch (true) {
            case(age <= 29):
                age = {[Op.between]: [17, 30]};
                break;
            case (age <= 49):
                age = {[Op.between]: [29, 50]};
                break;
            case (age <= 64):
                age = {[Op.between]: [49, 65]};
            case (age > 64):
                age = {[Op.between]: [64, 100]};

        }

        db.data.findAll({
            where: {sex: gender, age: age, inc: income, racem1: race, educ2: education}
        }).then(function (data) {
            // console.log(data);
            let user = [];
            let stats = {
                'eminuse': eminuse(data),
                'intmob': intmob(data),
                'intfreq': intfreq(data),
                'home4nw' : home4nw(data),
                'bbhome1' : bbhome1(data),
                'device1a' : device1a(data),
                'smart2' : smart2(data),
                'snsint2': snsint2(data),





            };
            user.push(stats);
            console.log(user);
        });

    }

};

getData.stats(1, 65, 6, 1, 6);

//Do you use the internet or email, at least occasionally?
let eminuse = function (data) {
    let usrYes = 0;
    let usrNo = 0;
    for (let x in data) {
        if (data[x].eminuse == 1) {
            usrYes++;
        } else {
            usrNo++;
        }
    }
    let total = usrNo + usrYes;
    return ({'1': parseInt((usrYes / total) * 100), '2': parseInt((usrNo / total) * 100)});
};

//Do you access the internet on a cell phone, tablet or other mobile handheld device, at least occasionally?
let intmob = function (data) {
    let usrYes = 0;
    let usrNo = 0;
    for (let x in data) {
        if (data[x].intmob == 1) {
            usrYes++;
        } else {
            usrNo++;
        }
    }
    let total = usrNo + usrYes;
    return ({'1': parseInt((usrYes / total) * 100), '2': parseInt((usrNo / total) * 100)});
};

//About how often do you use the internet?
let intfreq = function (data) {
    let scale1 = 0;
    scale2 = 0;
    scale3 = 0;
    scale4 = 0;
    scale5 = 0;
    for (let x in data) {
        if (data[x].intfreq == 1) {
            scale1++;
        }else if(data[x].intfreq == 2){
            scale2++;
        }else if(data[x].intfreq == 3){
            scale3++;
        }else if(data[x].intfreq == 4){
            scale4++;
        }else if(data[x].intfreq == 5){
            scale5++;
        }
    }
    let total = scale1+scale2+scale3+scale4+scale5;
    // console.log(total);
    return ({'1': parseInt((scale1/ total) * 100), '2': parseInt((scale2 / total) * 100), '3': parseInt((scale3 / total) * 100), '4': parseInt((scale4 / total) * 100), '5': parseInt((scale5 / total) * 100)});
};

//HOME4NW.	Do you currently subscribe to internet service at HOME?
let home4nw = function (data) {
    let usrYes = 0;
    let usrNo = 0;
    for (let x in data) {
        if (data[x].home4nw == 1) {
            usrYes++;
        } else {
            usrNo++;
        }
    }
    let total = usrNo + usrYes;
    return ({'1': parseInt((usrYes / total) * 100), '2': parseInt((usrNo / total) * 100)});
};

//BBHOME1.	Do you subscribe to dial-up internet service at home... OR do you subscribe to a higher-speed broadband service such as DSL, cable, or fiber optic service?
let bbhome1 = function (data) {
    let usrYes = 0;
    let usrNo = 0;
    for (let x in data) {
        if (data[x].bbhome1 == 1) {
            usrYes++;
        } else {
            usrNo++;
        }
    }
    let total = usrNo + usrYes;
    return ({'1': parseInt((usrYes / total) * 100), '2': parseInt((usrNo / total) * 100)});
};


//DEVICE1a.	Next, do you have a cell phone, or not?
let device1a = function (data) {
    let usrYes = 0;
    let usrNo = 0;
    for (let x in data) {
        if (data[x].device1a == 1) {
            usrYes++;
        } else {
            usrNo++;
        }
    }
    let total = usrNo + usrYes;
    return ({'1': parseInt((usrYes / total) * 100), '2': parseInt((usrNo / total) * 100)});
};

//SMART2.	Is your cell phone a smartphone, or not?
let smart2 = function (data) {
    let usrYes = 0;
    let usrNo = 0;
    for (let x in data) {
        if (data[x].smart2 == 1) {
            usrYes++;
        } else {
            usrNo++;
        }
    }
    let total = usrNo + usrYes;
    return ({'1': parseInt((usrYes / total) * 100), '2': parseInt((usrNo / total) * 100)});
};

//SNSINT2.	Do you ever use social media sites like Facebook, Twitter or Instagram?
let snsint2 = function (data) {
    let usrYes = 0;
    let usrNo = 0;
    for (let x in data) {
        if (data[x].snsint2 == 1) {
            usrYes++;
        } else {
            usrNo++;
        }
    }
    let total = usrNo + usrYes;
    return ({'1': parseInt((usrYes / total) * 100), '2': parseInt((usrNo / total) * 100)});
};





module.exports = getData;