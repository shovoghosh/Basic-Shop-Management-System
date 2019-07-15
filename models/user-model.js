var db=require('./db');

module.exports={

	validate:function(user,callback)
	{
		var sql="SELECT * from employee WHERE username=? and password=?";	
		db.getResult(sql,[user.username,user.password],function(result){
				if(result.length>0)
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
		var sql="SELECT * from employee";	
		db.getResult(sql,[],function(result){
				callback(result);

		});
	},
    
	insert:function(user,callback)
	{
		var sql="INSERT INTO employee VALUES(null,?,?,?,?)";	
		db.execute(sql,[user.name,user.contact,user.username,user.password],function(result){
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

	getById:function(id,callback)
	{
		var sql="SELECT * from employee WHERE id=?";	
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

	update:function(employee,callback)
	{
		var sql="UPDATE employee SET name=?,contact=?,username=?,password=? where id=?";	
		db.execute(sql,[employee.name,employee.contact,employee.username,employee.password,employee.id],function(result){
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
		var sql="DELETE from employee where id=?";	
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
		var sql="SELECT * from employee WHERE username =?";	
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

