import React from 'react';

// Add styling with css stylesheet
import './Person.css';

// The arrow function holds some advantages especially when it comes to the "this" keyword
// You should use function components as often as possible because state must be handled with care
// Having state in all your components and manipulating it from anywhere within your app will make the app quickly unpredictable and hard to manage especially as it grows
// Stateless component -> a component that does not manage or manipulate state internally
// This person component is a stateless component ("presentational" components) because it has no internal state management
const person = props => {
  return (
    // Outputting Dynamic Content
    // <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
    <div className='Person'>
      {/* Working with Properties */}
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      {/* Understanding the "children" Prop */}
      <p>{props.children}</p>
      {/* Added two way binding */}
      <input type='text' onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
