const express = require('express');
const Router = express.Router()

Router.get('/', (req, res)=>{
    try {
      res.render('index.ejs')
    } catch (error) {
      console.log(error.message);
    }
  })
  Router.get('/almacenar', (req, res)=>{
    try {
      res.render('almacenar.ejs')
    } catch (error) {
      console.log(error.message);
    }
  })


  