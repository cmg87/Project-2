const survey1 = require('../src/data/surveys/survey1.json')

const dummy = require('../src/data/fakeSqlData.json')

const getData = require('../logic')


const apiRouting = (app)=>{
    
    app.get('/api/questions', (req,res)=>{
        res.json(survey1)
    })



    app.get('/api/estResults', (req,res)=>{
        res.json(dummy);
    })

    app.get('/api/getResults', (req,res)=>{
        const params = req.body.params
        res.json(getData.stats(params))

    })

    app.post('/api/addUser', (req,res)=>{
        // Get user information when starting a survey
        const user = req.body
        console.log(user)
        getData.newUser(user)
        // Do magic that adds user information to database

    })    
}


module.exports = apiRouting
