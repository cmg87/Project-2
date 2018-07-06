const survey1 = require('../src/data/surveys/survey1.json')

const dummy = require('../src/data/fakeSqlData.json')

const getData = require('../logic')


const apiRouting = (app)=>{
    
    app.get('/api/questions', (req,res)=>{
        res.json(survey1)
    })


    // app.get('/api/estResults', (req,res)=>{
    //     const params = req.body.params
    //     // Do magic to query database and send back survey results based on optionally provided params
    // })

    app.get('/api/estResults', (req,res)=>{
        res.json(dummy);

    app.get('/api/getResults', (req,res)=>{
        const params = req.body.params
        res.json(getData.stats(params))

    })

    app.post('/api/sendResults', (req,res)=>{
        // Get user answers object from request body
        const user_results = req.body.results
        // Do magic that adds user results to database
    })

    app.post('/api/addUser', (req,res)=>{
        // Get user information when starting a survey
        const newUser = req.body
        // Do magic that adds user information to database
        console.log(newUser)        
    })    
}


module.exports = apiRouting
