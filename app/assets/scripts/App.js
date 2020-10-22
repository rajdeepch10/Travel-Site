import '../styles/styles.css';

if (module.hot) {
	module.hot.accept();
}

/* Lesson example code*/
function Person(name, favColor) {
	(this.name = name), (this.favColor = favColor);
	this.greet = function() {
		console.log('Hello There! ' + this.name + ' Color: ' + this.favColor + ' .');
	};
}

let john = new Person('John Doe', 'Yellow');
john.greet();

var jane = new Person('Jane Smith', 'Blue');
jane.greet();
