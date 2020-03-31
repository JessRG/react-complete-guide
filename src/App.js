import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// import styled from 'styled-components';
// import Radium, { StyleRoot } from 'radium';

// Styled Components and Dynamic Styles
// const StyledButton = styled.button`
//   background-color: ${(props) => (props.alt ? 'red' : 'green')};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${(props) => (props.alt ? 'salmon' : 'lightgreen')};
//     color: black;
//   }
// `;

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
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    // store the specific index of the person who's id matches with the id parameter
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    // store copy of the specific person
    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex])

    // modify specific person's name
    person.name = event.target.value;

    // store copy of persons
    const persons = [...this.state.persons];
    // update the specific person within the persons copy
    persons[personIndex] = person;

    // set the state persons array with the updated persons copy
    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    // Always update state in an immutable fashion
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
    // Working with Inline Styles
    // this approach of styling does not leverage the full power of css, but is scoped to the specific component/element you want to style
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
        // Outputting List of Persons using JavaScript
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                // adding this change handler method to allow our list of persons to be more flexible
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      // Setting style dynamically when showPersons is true
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      // JSX
      // <StyleRoot>
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}>
          Toggle Persons
        </StyledButton>
        {/* Rendering Content Conditionally */}
        {persons}
      </div>
      // </StyleRoot>
    );
  }
}
// Installed Radium package which is a component which wraps the App component and adds/injects extra functionality (additional syntax which will parse the styles and understand some extra features we can now implement)
// export default Radium(App);

export default App;
