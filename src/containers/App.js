import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

// Stateful component -> a component that manages state regardless if you use class-based approach (state property) or react hooks (useState()) to manipulate state
// App class component is an example of a stateful component ("container" component)
class App extends Component {
	constructor(props) {
		super(props);
		console.log('[App.js] constructor');
	}

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
		showPersons: false,
		showCockpit: true,
		changeCounter: 0,
		authenticated: false
	};

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps', props);
		return state;
	}

	// componentWillMount() {
	// 	console.log('[App.js] componentWillMount');
	// }

	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[App.js] shouldComponentUpdate');
		return true;
	}

	componentDidUpdate() {
		console.log('[App.js] componentDidUpdate');
	}

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

		this.setState((prevState, props) => {
			return {
				persons: persons,
				changeCounter: prevState.changeCounter + 1
			};
		});
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

	loginHandler = () => {
		this.setState({ authenticated: true });
	};

	render() {
		console.log('[App.js] render');
		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<Persons
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.nameChangedHandler}
					isAuthenticated={this.state.authenticated}
				/>
			);
		}

		return (
			<Aux>
				<button
					onClick={() => {
						this.setState({ showCockpit: false });
					}}>
					Remove Cockpit
				</button>
				{this.state.showCockpit ? (
					<Cockpit
						title={this.props.appTitle}
						showPersons={this.state.showPersons}
						personsLength={this.state.persons.length}
						clicked={this.togglePersonsHandler}
						login={this.loginHandler}
					/>
				) : null}
				{persons}
			</Aux>
		);
	}
}
export default withClass(App, classes.App);
