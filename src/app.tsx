import React = require('react');
import $ = require('jquery');
import {Greeter as Greetifier} from 'greeter';

function getRandomGreeting() {
	switch(Math.floor(Math.random() * 4)) {
		case 0: return 'Hello';
		case 1: return 'Howdy';
		case 2: return 'Greeting';
		case 3: return 'Hail';
	}
}

$(() => {
	React.render(<Greetifier whoToGreet='world' greeting='Hello' />, $('#output').get(0));
});

