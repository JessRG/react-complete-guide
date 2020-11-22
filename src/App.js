import React, { Component } from 'react';

import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
			{ id: 'asfa1', name: 'Max', age: 28 },
			{ id: 'fafs1', name: 'Manu', age: 30 },
			{ id: 'zxvz1', name: 'Stephanie', age: 26 }
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

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex((p) => {
			return p.id === id;
		});

		const person = {
			...this.state.persons[personIndex]
		};
		// const person = Object.assign({}, this.state.persons[personIndex]);

		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({ persons: persons });
	};

	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons.slice();
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	render() {
		let persons = null;
		let btnClass = '';

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							// <ErrorBoundary key={person.id}>
							<Person
								click={this.deletePersonHandler.bind(this, index)}
								name={person.name}
								age={person.age}
								key={person.id}
								changed={(event) => this.nameChangedHandler(event, person.id)}
							/>
							// </ErrorBoundary>
						);
					})}
				</div>
			);

			btnClass = classes.Red;
		}

		const assignedClasses = [];
		if (this.state.persons.length <= 2) {
			assignedClasses.push(classes.red); // assignedClasses = ['red']
		}
		if (this.state.persons.length <= 1) {
			assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
		}

		return (
			<div className={classes.App}>
				<h1>Hello</h1>
				<p className={assignedClasses.join(' ')}>This is really working!</p>
				<button className={btnClass} onClick={this.togglePersonsHandler}>
					Toggle Persons
				</button>
				{persons}
			</div>
		);
	}
}
export default App;
