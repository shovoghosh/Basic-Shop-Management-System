var express=require('express');
var router=express.Router();
var userModel=require.main.require('./models/user-model');


router.get('*',function(req,res,next){
	if(req.session.un==null)
	{
		res.redirect('/login');
	}
	else
	{
		next();
	}
});


router.get('/create',function(req,res){
	res.render('create/index');
});


router.get('/',function(req,res){

	userModel.getAll(function(result){
		if(result.length > 0)
		{
			
			res.render('home/home',{name:req.session.un,list:result});
		}
		else
		{
			res.redirect('/login');
		}
	});
	

});


router.post('/create',function(req,res){
	var user={
        name:req.body.name,
		contact:req.body.contact,
		username:req.body.username,
		password:req.body.password
	};

	userModel.insert(user,function(status){
		if(status)
		{
			res.redirect('/home');

		}
		else
		{
			res.send('Error in adding...');
		}
	});
});



router.get('/edit/:id',function(req,res){
	var id = req.params.id;
    
	userModel.getById(id,function(user){
        
		console.log(user);
		res.render('edit/index',user);
	});
	
});



router.post('/edit/:id',function(req,res){
	
	var user={
		id:req.params.id,
		name:req.body.name,
		contact:req.body.contact,
		username:req.body.username,
		password:req.body.password
	};

	userModel.update(user,function(status){
		if(status)
		{
			res.redirect('/home');

		}
		else
		{
			res.send('Error in updating...');
		}
	});
	
});


router.get('/delete/:id',function(req,res){
	
	res.render('delete/index',{id:req.params.id});
	
});


router.post('/delete/:id',function(req,res){
	
	if(req.body.yes)
	{
		userModel.delete(req.params.id,function(status){
			if(status)
			{
				res.redirect('/home');
			}
			else
			{
				res.send('Error in deleting...');
			}

		})
	}
	else
	{
		res.redirect('/home');
	}
	
});

router.post('/getData',function(req,res){
	
	userModel.searchByName(req.body.name,function(result){
		if(result.length>0)
		{
			console.log(result);
			res.send(result[0]);
		}
		else
		{
			res.send("Not found...");
		}
	});
	
	
});




module.exports=router;
