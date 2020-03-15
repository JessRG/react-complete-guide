import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
    otherState: 'some other value'
  };

  // Manipulating the State
  switchNameHandler = () => {
    // console.log('Was clicked!');
    //this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  render() {
    return (
      // JSX
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* Understanding and using state */}
        <button onClick={this.switchNameHandler}>Switch Name</button>
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
        {/* Understanding the "children" Prop */}
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement(
    //   'div',
    //   null,
    //   React.createElement('h1', {className: 'App'}, 'Does this work now?')
    // );
  }
}

export default App;
