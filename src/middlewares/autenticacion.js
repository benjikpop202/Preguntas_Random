const jwt = require('jsonwebtoken');
require('dotenv').config()

function genereteAccesToken(user){
 return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '5h'})
}
function ValidationToken(req, res, next){
 const AccesToken = req.headers['authorization']
 if(!AccesToken) res.send('Acceso denegado')

 jwt.verify(AccesToken, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
   if(err){
     res.send('acceso denegado, token expirado o incorrecto')
   }else{
    next()
   }
 })
}
function isAdmin(req, res, next) {
    if (req.user && req.user.role === 'admin') {
      next();
    } else {
      res.sendStatus(403); // Prohibido si no es admin
    }
  }

  module.exports = {genereteAccesToken, isAdmin, ValidationToken}