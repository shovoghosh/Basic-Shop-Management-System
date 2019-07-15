//Declaration
var express=require('express');
var app=express();
var path    = require("path");
var loginController=require('./controllers/login-controller');
var homeController=require('./controllers/home-controller');
var logoutController=require('./controllers/logout-controller');
var productController=require('./controllers/product-controller');
var registrationController=require('./controllers/registration-controller');

var bodyParser=require('body-parser');
var expressSession=require('express-session');
var port=1337;

//Configuration
app.set('view engine','ejs');

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(expressSession({secret:"My secret is secret",saveUninitialized:true,resave:false}));

app.use(express.static(__dirname + '/public'));

//Routes
app.use('/',loginController);
app.use('/login',loginController);
app.use('/home',homeController);
app.use('/logout',logoutController);
app.use('/product',productController);
app.use('/registration',registrationController);

//Server Start-up
app.listen(port,function(){
	console.log("Server Started...");
});