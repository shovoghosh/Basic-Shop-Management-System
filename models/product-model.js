var db=require('./db');
module.exports={
	insert:function(product,callback)
	{
		var sql="INSERT INTO product VALUES(null,?,?,?)";	
		db.execute(sql,[product.name,product.quantity,product.price],function(result){
				if(result)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	},
	getAll:function(callback)
	{
		var sql="SELECT * from product";	
		db.getResult(sql,[],function(result){
				callback(result);

		});
	},

	getById:function(id,callback)
	{
		var sql="SELECT * from product WHERE id=?";	
		db.getResult(sql,[id],function(result){
				if(result.length>0)
				{
					callback(result[0]);
				}
				else
				{
					callback([]);
				}

		});
	},
	update:function(product,callback)
	{
		var sql="UPDATE product SET name=?,quantity=?,price=? where id=?";	
		db.execute(sql,[product.name,product.quantity,product.price,product.id],function(result){
				if(result)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	},
	delete:function(id,callback)
	{
		var sql="DELETE from product where id=?";	
		db.execute(sql,[id],function(result){
				if(result)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	},
    
    searchByName:function(name,callback)
	{
		var sql="SELECT * from product WHERE name=?";	
		db.getResult(sql,[name],function(result){

				if(result.length>0)
				{
					
					callback(result);
				}
				else
				{
					
					callback([]);
				}

		});
	}
};