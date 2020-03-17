import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  /** Understanding and using state
   *
   * react 16.8 -> React hooks feature was released which can also manage state and functional components */
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  });

  // update old state by calling useState a second time
  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  // // Manipulating the State
  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    // using setPersonsState does NOT merge whatever you pass to it with the old state, instead it replaces the old state
    // must manually include all old state data when updating the state OR call useState multiple times
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  return (
    // JSX
    <div className='App'>
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      {/* Understanding and using state */}
      <button onClick={switchNameHandler}>Switch Name</button>
      {/* Working with Properties
            -> props allow you to pass data from a parent (wrapping) component to a child (embedded) component (passes data down the component tree)
            -> state is used to change the component state from within
            -> state implemented with "this" keyword
            -> changes in props  and/or state  trigger React to re-render your components and potentially update the DOM in the browser
        */}
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      {/* Understanding the "children" Prop */}
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default app;
