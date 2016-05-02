
function tester() {
	console.log("clicked")
	console.log(hello_clicker.display_text);

}

function test2() {
	console.log(hello_clicker.sayHello());
}

var Clicker = function(display_text) {
	this.display_text = display_text;
	console.log("Clicker instance created");
};

Clicker.prototype.sayHello = function() {
	console.log("Hello, I'm " + this.display_text);
}


var hello_clicker = new Clicker('Bob');