var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('someEvent', function(){
	console.log('listener1');
})
emitter.on('someEvent', function(){
	console.log('listener2');
})
/*emitter.on('error',function(){
	console.log('SomeError');
})*/
//emitter.emit('someEvent');   //istener1 listener2

emitter.emit('error');