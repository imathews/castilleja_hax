castiHax.initTeam('TeamEKM', function(){

	// castiHax.set({hello: 'worldyyy'}, function(err){

	// });

	// castiHax.get("Test Category", function(err){
	// 	alert(err);
	// });

	$('#submitNewLink').on('click', function(){
		var category =  $('#catagory').val();
		var linkName = $('#link-name').val();
		var link = $('#link').val();
		console.log(category);
		console.log(linkName);
		console.log(link);

		castiHax.get(category, function(res){
			request = {}
			var vals = []
			if (res !== null) {
			  vals = res;
			} 
			vals.push([linkName, link]);
			request[category] = vals;
			castiHax.set(request);
			alert("Congratulations! You have sucessfully added a link");
		});


	});


	$(document).ready ( function(){
		var category =  document.getElementById("title").innerHTML;
		console.log(category)

		castiHax.get(category, function(res){
			console.log(res)
			for (i = 0; i < res.length; i++) { 
    			var name = res[i][0]
    			var link = res[i][1]
    			document.getElementById('results').innerHTML += "<div>" + name + "</div>";
			}
		});


	});
});

