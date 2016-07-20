import React from 'react';

export default class UserDisplay extends React.Component {

	render() {
		return(
			<h1>{this.props.user.name}!</h1>
		)
	}

}