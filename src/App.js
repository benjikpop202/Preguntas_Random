const express = require('express')
const path = require('path')
const morgan = require('morgan')
const UserRoutes = require('./routers/user.routes.js')
const AdminRoutes = require('./routers/admin.routes.js')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const app = express();
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}))
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/')));
app.use(AdminRoutes)
app.use(UserRoutes)


module.exports = app