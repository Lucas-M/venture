var venchur =  venchur || {};

// perform a similar existence check when defining nested
// children
venchur.routers = venchur.routers || {};
venchur.model = venchur.model || {};
venchur.model.special = venchur.model.special || {};

// nested namespaces can be as complex as required:
// venchur.utilities.charting.html5.plotGraph(/*..*/);
// venchur.modules.financePlanner.getSummary();
// venchur.services.social.facebook.realtimeStream.getLatest();





















// var venchur = function() {


// 	function this.make_clicker(name) {
// 		console.log(hello_clicker.sayHello());
// 	}

// 	// Here we define what a Clicker is
// 	var Clicker = function(name) {
// 		this.name = name;
// 		console.log("Clicker named " + this.name + " created");
// 	};

// 	// This function will have the clicker say it's name
// 	Clicker.prototype.sayHello = function() {
// 		console.log("Hello, I'm " + this.name);
// 	}


// 	var hello_clicker = new Clicker('Bob');
// }

// var vc = new venchur();






// // namespace (our namespace name) and undefined are passed here
// // to ensure 1. namespace can be modified locally and isn't
// // overwritten outside of our function context
// // 2. the value of undefined is guaranteed as being truly
// // undefined. This is to avoid issues with undefined being
// // mutable pre-ES5.

// ;(function ( namespace, undefined ) {
//     // private properties
//     var foo = "foo",
//         bar = "bar";

//     // public methods and properties
//     namespace.foobar = "foobar";
//     namespace.sayHello = function () {
//         speak("hello world");
//     };

//     // private method
//     function speak(msg) {
//         console.log("You said: " + msg);
//     };

//     // check to evaluate whether 'namespace' exists in the
//     // global namespace - if not, assign window.namespace an
//     // object literal
// })(window.namespace = window.namespace || {});


// // we can then test our properties and methods as follows

// // public
// console.log(namespace.foobar); // foobar
// namescpace.sayHello(); // hello world

// // assigning new properties
// namespace.foobar2 = "foobar";
// console.log(namespace.foobar2);