const express = require('express')
const Questions = require('../../Questions')

const routing = (app)=>{

    app.get('/api/questions', (req,res)=>{
        res.json(Questions)
    })
}

module.exports = routing