import React, { Component } from 'react';
// import logo from './logo.svg';
import './Person/Person.css';
import './App.css';
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
		const style = {
			backgroundColor: 'green',
			color: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
			':hover': {
				backgroundColor: 'lightgreen',
				color: 'black'
			}
		};

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								click={this.deletePersonHandler.bind(this, index)}
								name={person.name}
								age={person.age}
								key={person.id}
								changed={(event) => this.nameChangedHandler(event, person.id)}
							/>
						);
					})}
				</div>
			);

			style.backgroundColor = 'red';
			style[':hover'] = {
				backgroundColor: 'salmon',
				color: 'black'
			};
		}

		const classes = [];
		if (this.state.persons.length <= 2) {
			classes.push('red'); // classes = ['red']
		}
		if (this.state.persons.length <= 1) {
			classes.push('bold'); // classes = ['red', 'bold']
		}

		return (
			// <StyleRoot>
			<div className='App'>
				<h1>Hello</h1>
				<p className={classes.join(' ')}>This is really working!</p>
				<button style={style} onClick={this.togglePersonsHandler}>
					Toggle Persons
				</button>
				{persons}
			</div>
			// </StyleRoot>
		);
	}
}
export default App;
