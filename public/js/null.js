$(document).ready(function(){
    
$(document).on('submit', 'form.editu', nullval)
	
    function nullval (e) {
    e.preventDefault()
    $.get('/your_route', {data: '#name'}, function (res) {
        console.log('callback after your node function is done')
    })
}
    
    
     //onsubmit="nullval()"
    
	$("#submit").click(function(){
		if($("#name").val()==null  )
		{
			$("#message").html("All fields are required");
			console.log("all value must be required");
		}
	});

});

