$(document).ready(function(){

$("button").click(function(){
	

	$.ajax({
		url:"/product/getData",
		method:"post",
		data:{
			name:$('#pnam').val()
		},
		success:function(res){
			$("#par").html("<table border='1'><tr><th>ID</th><th>Product Name</th><th>Quantity</th><th>Price</th></tr><tr><td>"+res.id+"</td> <td>"+res.name+"</td> <td>"+res.quantity+"</td><td>"+res.price+"</td></tr></table>");
			//document.write(res);
		}
	});
});


});