castiHax.initTeam('Ian&Sierra', function(){

	castiHax.set({hello: 'worldyyy'}, function(err){

	});
	$('#submit').on('click', function(){
		console.log($('#email').val());
		castiHax.set({email: $('#email').val()});
	})

});

