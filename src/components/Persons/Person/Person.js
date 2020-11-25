import React, { Component } from 'react';

import Aux from '../../../hoc/Aux';
import classes from './Person.css';

// import './Person.css';

// Stateless Functional Component
class Person extends Component {
	render() {
		console.log('[Person.js] rendering...');
		// const rnd = Math.random();

		// if (rnd > 0.7) {
		// 	throw new Error('Something went wrong');
		// }

		return (
			<Aux>
				<p onClick={this.props.click}>
					I am {this.props.name} and I am {this.props.age} years old
				</p>
				<p>{this.props.children}</p>
				<input
					type='text'
					onChange={this.props.changed}
					value={this.props.name}
				/>
			</Aux>
		);
	}
}
export default Person;
