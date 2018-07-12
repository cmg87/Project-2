let db = require("./models");
let Sequelize = require('sequelize');
const Op = Sequelize.Op;
let getData = {

    stats: function ({sex: gender, age: age, inc: income, racem1: race, educ2: education}) {
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
            let user = [];
            let stats = {
                'EMINUSE': results1(data, 'eminuse'),
                'INTMOB': results1(data, 'intmob'),
                'INTFREQ': scale(data, 'intfreq'),
                'HOME4NW': results1(data, 'home4nw'),
                'BBHOME1': results1(data, 'bbhome1'),
                'DEVICE1a': results1(data, 'device1a'),
                'SMART2': results1(data, 'smart2'),
                'SNSINT2': results1(data, 'snsint2'),
                'DEVICE1B': results1(data, 'device1b'),
                'DEVICE1c': results1(data, 'device1c'),
                'DEVICE1D': results1(data, 'device1d'),
                'WEB1A': results1(data, 'web1a'),
                'WEB1B': results1(data, 'web1b'),
                'WEB1C': results1(data, 'web1c'),
                'WEB1D': results1(data, 'web1d'),
                'WEB1E': results1(data, 'web1e'),
                'WEB1F': results1(data, 'web1f'),
                'WEB1G': results1(data, 'web1g'),
                'WEB1H': results1(data, 'web1h'),
                'SNS2A': scale(data, 'sns2a'),
                'SNS2B': scale(data, 'sns2b'),
                'SNS2C': scale(data, 'sns2c'),
                'SNS2D': scale(data, 'sns2d'),
                'SNS2E': scale(data, 'sns2e'),
                'PIAL5A': scale(data, 'pial5a'),
                'PIAL5B': scale(data, 'pial5b'),
                'PIAL5C': scale(data, 'pial5c'),
                'PIAL5D': scale(data, 'pial5d'),
                'PIAL11': results1(data, 'pial11'),
                'PIAL12': results2(data, 'pial12'),
                'BOOKS1': results3(data, 'books1'),
                'BOOKS2A': results1(data, 'books2a'),
                'BOOKS2B': results1(data, 'books2b'),
                'BOOKS2C': results1(data, 'books2c'),


            };
            user.push(stats);
            console.log(user);
            return user;

        });

    },

    newUser: function (user) {

        db.data.create({
            eminuse: user.eminuse,
            intmob: user.intmob,
            intfreq: user.intfreq,
            home4nw: user.home4nw,
            bbhome1: user.bbhome1,
            device1a: user.device1a,
            smart2: user.smart2,
            snsint2: user.snsint2,
            device1b: user.device1b,
            device1c: user.device1c,
            device1d: user.device1d,
            web1a: user.web1a,
            web1b: user.web1b,
            web1c: user.web1c,
            web1d: user.web1d,
            web1e: user.web1e,
            web1f: user.web1f,
            web1g: user.web1g,
            web1h: user.web1h,
            sns2a: user.sns2a,
            sns2b: user.sns2b,
            sns2c: user.sns2c,
            sns2d: user.sns2d,
            sns2e: user.sns2e,
            pial5a: user.pial5a,
            pial5b: user.pial5b,
            pial5c: user.pial5c,
            pial5d: user.pial5d,
            pial11: user.pial11,
            pial12: user.pial12,
            books1: user.books1,
            books2a: user.books2a,
            books2b: user.books2b,
            books2c: user.books2c,
        }).then(function (user) {
            console.log('new user added to database')
        }).catch(function (err) {
            console.log(err);
        })

    }

};

let results1 = function (data, question) {
    let usrYes = 0;
    let usrNo = 0;
    for (let x in data) {
        if (data[x][question] == 1) {
            usrYes++;
        } else {
            usrNo++;
        }
    }
    let total = usrNo + usrYes;
    return ({'1': parseInt((usrYes / total) * 100), '2': parseInt((usrNo / total) * 100)});
};


let results2 = function (data, question) {
    let usrYes = 0;
    let usrNo = 0;
    let other = 0;
    for (let x in data) {
        if (data[x][question] == 1) {
            usrYes++;
        } else if (data[x][question] == 2) {
            usrNo++;
        } else {
            other++;
        }
    }
    let total = usrNo + usrYes + other;
    return ({
        '1': parseInt((usrYes / total) * 100),
        '2': parseInt((usrNo / total) * 100),
        '3': parseInt((other / total) * 100)
    });
};


let results3 = function (data, question) {
    let usrYes = 0;
    let usrNo = 0;
    let other = 0;
    for (let x in data) {
        if (data[x][question] <= 4) {
            usrYes++;
        } else if (data[x][question] <= 9) {
            usrNo++;
        } else {
            other++;
        }
    }
    let total = usrNo + usrYes + other;
    return ({
        '1': parseInt((usrYes / total) * 100),
        '2': parseInt((usrNo / total) * 100),
        '3': parseInt((other / total) * 100)
    });
};


let scale = function (data, question) {
    let scale1 = 0;
    scale2 = 0;
    scale3 = 0;
    scale4 = 0;
    scale5 = 0;
    for (let x in data) {
        if (data[x][question] == 1) {
            scale1++;
        } else if (data[x][question] == 2) {
            scale2++;
        } else if (data[x][question] == 3) {
            scale3++;
        } else if (data[x][question] == 4) {
            scale4++;
        } else if (data[x][question] == 5) {
            scale5++;
        }
    }
    let total = scale1 + scale2 + scale3 + scale4 + scale5;
    // console.log(total);
    return ({
        '1': parseInt((scale1 / total) * 100),
        '2': parseInt((scale2 / total) * 100),
        '3': parseInt((scale3 / total) * 100),
        '4': parseInt((scale4 / total) * 100),
        '5': parseInt((scale5 / total) * 100)
    });
};


module.exports = getData;

// let Obj = {
//     sex: 2,
//     age: 33,
//     inc: 6,
//     educ2: 5,
//     racem1: 1
// };
//
// getData.stats(Obj);