import React = require('react');
import $ = require('jquery');

interface GreeterProps extends React.Props<Greeter> {
	whoToGreet: string;
	greeting?: string;
}
class Greeter extends React.Component<GreeterProps, {}> {
	render() {
		let greeting = this.props.greeting || 'Hello';
		return <div>{greeting}, {this.props.whoToGreet}</div>;
	}
}

function getRandomGreeting() {
	switch(Math.floor(Math.random() * 4)) {
		case 0: return 'Hello';
		case 1: return 'Howdy';
		case 2: return 'Greeting';
		case 3: return 'Hail';
	}
}

$(() => {
	React.render(<Greeter whoToGreet='world' greeting='Hello' />, $('#output').get(0));
});

