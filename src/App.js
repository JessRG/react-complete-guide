import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';

// Stateful component -> a component that manages state regardless if you use class-based approach (state property) or react hooks (useState()) to manipulate state
// App class component is an example of a stateful component ("container" component)
class App extends Component {
	/** Understanding and using state
	 *
	 * State managed from inside a component state property is only available like this in classes/components that extend Component
	 *
	 * state -> reserved keyword that is only available in class-based react components
	 *
	 * react 16.8 -> React hooks feature was released which can also manage state and functional components */
	state = {
		persons: [
			{ name: 'Max', age: 28 },
			{ name: 'Manu', age: 30 },
			{ name: 'Stephanie', age: 26 }
		],
		otherState: 'some other value',
		showPersons: false
	};
	switchNameHandler = (newName) => {
		this.setState({
			persons: [
				{ name: newName, age: 28 },
				{ name: 'Manu', age: 30 },
				{ name: 'Stephanie', age: 26 }
			]
		});
	};
	nameChangedHandler = (event) => {
		this.setState({
			persons: [
				{ name: 'Max', age: 28 },
				{ name: event.target.value, age: 30 },
				{ name: 'Stephanie', age: 26 }
			]
		});
	};
	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};
	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					<Person
						name={this.state.persons[0].name}
						age={this.state.persons[0].age}></Person>
					<Person
						name={this.state.persons[1].name}
						age={this.state.persons[1].age}
						click={this.switchNameHandler.bind(this, 'ZZ')}
						changed={this.nameChangedHandler}>
						{' '}
						My hobbies: Racing
					</Person>
					<Person
						name={this.state.persons[2].name}
						age={this.state.persons[2].age}></Person>
				</div>
			);
		}

		return (
			<div className='App'>
				<h1>Hello</h1>
				<p>This is really working!</p>
				<button style={style} onClick={this.togglePersonsHandler}>
					Toggle Persons
				</button>
				{persons}
			</div>
		);
	}
}
export default App;
