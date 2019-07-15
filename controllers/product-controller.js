var express=require('express');
var router=express.Router();
var productModel=require.main.require('./models/product-model');

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


router.get('/addProduct',function(req,res){
	res.render('addProduct/index');
});


router.post('/addproduct',function(req,res){
	var product={
		name:req.body.name,
		quantity:req.body.quantity,
		price:req.body.price,
	};

	productModel.insert(product,function(status){
		if(status)
		{
			res.redirect('/product/list');

		}
		else
		{
			res.send('Error in adding...');
		}
	});
});


router.get('/list',function(req,res){
	productModel.getAll(function(result){
		if(result.length > 0)
		{
			
			res.render('productList/index',{name:req.session.un,list:result});
		}
		else
		{
			res.redirect('/product/list');
		}
	});
});

router.get('/edit/:id',function(req,res){
	var id=req.params.id;
	productModel.getById(id,function(user){
		console.log(user);
		res.render('productEdit/index',user);
	});
	
});



router.post('/edit/:id',function(req,res){
	
	var product={
		id:req.params.id,
		name:req.body.name,
		quantity:req.body.quantity,
		price:req.body.price
	};

	productModel.update(product,function(status){
		if(status)
		{
			res.redirect('/product/list');

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
		productModel.delete(req.params.id,function(status){
			if(status)
			{
				res.redirect('/product/list');
			}
			else
			{
				res.send('Error in deleting...');
			}

		})
	}
	else
	{
		res.redirect('/product/list');
	}
	
});


router.post('/getData',function(req,res){
	
	productModel.searchByName(req.body.name,function(result){
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


module.exports = router;