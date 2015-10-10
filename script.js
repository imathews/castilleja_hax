castiHax.initTeam('TSwiftYoungBlood', function(){

	castiHax.getAll(function(res){
		console.log(res);
	});
	castiHax.set({ian: 'mathews'}, function(val){
		console.log(val);
	})
	castiHax.onSet(function(val){
		console.log(val);
	})
	$('#submit').on('click', function(){
		console.log($('#email').val());
		castiHax.set({email: $('#email').val()});
	});
});

