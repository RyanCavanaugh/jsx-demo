import React = require('react');

interface GreeterProps extends React.Props<Greeter> {
	whoToGreet: string;
	greeting?: string;
}

export class Greeter extends React.Component<GreeterProps, {}> {
	render() {
		let greeting = this.props.greeting || 'Hello';
		return <div>{greeting}, {this.props.whoToGreet}</div>;
	}
}
