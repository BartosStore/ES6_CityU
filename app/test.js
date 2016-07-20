import React from 'react';
import firebase from 'firebase';

export default class Test extends React.Component {

	constructor() {
		super();
		this.state = {text: 'first text', loggedIn: 'false', mail: '', pass: ''};
		console.log("start");
	}

	componentDidMount() {

	}


	render() {
		return(			
			<div>
				<h1>{this.state.text}</h1>
				Text

				<form className="signInForm" onSubmit={this.handleSubmit}>
	        <input
	          type="text"
	          placeholder="Your mail"
	          value={this.state.mail}
	        />

	        <input
	          type="text"
	          placeholder="Your pass"
	          refs="inputPass"
	        />

	        <input type="submit" value="Potvrdit" />
		    </form>
			</div>
		)
	}

}