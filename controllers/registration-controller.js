var express=require('express');
var router=express.Router();
var userModel=require.main.require('./models/user-model');

router.get('/registration',function(req,res){

	//res.send("<script>alert('hello')</script>");
	res.render('registration/index');

});

router.post('/registration',function(req,res){
	var user={
        name:req.body.name,
		contact:req.body.contact,
		username:req.body.username,
		password:req.body.password
	};

	userModel.insert(user,function(status){
		if(status)
		{
                        
         res.redirect('/login');

		}
		else
		{
			res.send('Error in adding...');
		}
	});
});



/*
router.post('/',function(req,res){
	var userr={
		
		name:req.body.name,
        contact:req.body.contact,
        username:req.body.username,
        password:req.body.password

	};

	userModel.insert(userr,function(status){
		if(status)
		{
            res.send("<script>alert('Successfull')</script>");
			res.redirect('/login');

		}
		else
		{
			res.send('Error in adding...');
		}
	});
});
*/

module.exports=router;