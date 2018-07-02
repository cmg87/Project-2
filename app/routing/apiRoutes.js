const survey1 = require('../../src/data/surveys/survey1.son')

const apiRouting = (app)=>{
    
    app.get('/api/questions', (req,res)=>{
        res.json(survey1)
    })

    app.get('/api/estResults', (req,res)=>{
        const params = req.body.params
        // Do magic to query database and send back survey results based on optionally provided params
    })

    app.post('/api/sendResults', (req,res)=>{
        // Get user answers object from request body
        const user_results = req.body.results
        // Do magic that adds user results to database
    })



}
