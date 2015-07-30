import React = require('react');
import $ = require('jquery');



$(() => {
	React.render(<div>Hello, world</div>, $('#output').get(0));
});

