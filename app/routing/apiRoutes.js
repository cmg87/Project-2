const Questions = require('../../src/data/surveys/survey1.son')

const apiRouting = (app)=>{
    
    app.get('/api/questions', (req,res)=>{
        res.json(Questions)
    })

}