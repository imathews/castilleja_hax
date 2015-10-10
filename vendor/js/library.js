window.castiHax = {};

var domain = 'http://staging.redivis.com';
//var domain = 'http://localhost:8080';
var teamName;
var onSet;
var socket;
var emptyFn = function(){};

castiHax.initTeam = function(name, cb){
	teamName = name;
	var initSocket = io.connect(domain + '/init').on('connect', function(){
		initSocket.emit('setTeamName', name, function(){
			socket = io.connect(domain + '/'+teamName).on('connect', function(){
				socket.on('set', function(val){
					if (onSet) onSet(val);
				});
				cb();
			});
		});
	});
};

castiHax.getAll = function(cb){
	cb = cb || emptyFn();
	socket.emit('getAll', null, function(err, res){
		if (err) console.error(err);
		cb(res);
	});
};
castiHax.deleteAll = function(cb){
	cb = cb || emptyFn();
	socket.emit('deleteAll', function(err, res){
		if (err) console.error(err);
		cb(res);
	});
};
castiHax.onSet = function(cb){
	onSet = cb;
};

castiHax.set = function(obj, cb){
	cb = cb || emptyFn;
	socket.emit('set', obj, function(err, res){
		if (err) console.error(err);
		cb(res);
	});
};

castiHax.get = function(key, cb){
	cb = cb || emptyFn;
	socket.emit('get', key, function(err, res){
		if (err) console.error(err);
		cb(res);
	});
};

castiHax.delete = function(key, cb){
	cb = cb || emptyFn;
	socket.emit('delete', key, function(err, res){
		if (err) console.error(err);
		cb(res);
	});
};