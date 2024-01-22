
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc= require('swagger-jsdoc');
const swaggerData = require("./docs/swagger")
const port = 4000
const routes = require("./Middleware/index");
const bodyParser = require('body-parser');
 const session =require("express-session");
 const flash = require("connect-flash");
 const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json({}));
app.use(cookieParser());

app.use(express.static(__dirname + '/public'));

//session middleware
app.use(session({
    secret:"secret key",
    resave:false,
    saveUninitialized:true
}));


app.use(flash());


app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));


app.use('/api',routes)
app.use(
'/api-docs', 
swaggerUi.serve,
 swaggerUi.setup(swaggerJsdoc(swaggerData))
);
app.listen(port,()=>{
    console.log(`Listening on the port ${port}`);
})  
