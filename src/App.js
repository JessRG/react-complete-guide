import React, { Component } from 'react';
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
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  // Manipulating the State
  switchNameHandler = newName => {
    // console.log('Was clicked!');
    //this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    // Working with Inline Styles
    // this approach of styling does not leverage the full power of css, but is scoped to the specific component/element you add it to
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      // JSX
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* Understanding and using state 
            -> Alternative code/syntax for button onClick property set to pass a method reference to Person component as an arrow function with an argument (can be less efficient than bind) */}
        <button
          style={style} // Inline styling
          onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {/* Rendering Content Conditionally */}
        {this.state.showPersons ? (
          <div>
            {/* Working with Properties
          -> props allow you to pass data from a parent (wrapping) component to a child (embedded) component (passes data down the component tree)
          -> state is used to change the component state from within
          -> state implemented with "this" keyword
          -> changes in props  and/or state  trigger React to re-render your components and potentially update the DOM in the browser
      */}
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            {/* Pass method reference from App component to Person function component using click property using bind */}
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Max!')}
              changed={this.nameChangedHandler}>
              {/* Understanding the "children" Prop */}
              My Hobbies: Racing
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
