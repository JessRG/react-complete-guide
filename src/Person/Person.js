import React from 'react';

// The arrow function holds some advantages especially when it comes to the "this" keyword
// You should use function components as often as possible because state must be handled with care
// Having state in all your components and manipulating it from anywhere within your app will make the app quickly unpredictable and hard to manage especially as it grows
const person = props => {
  return (
    // Outputting Dynamic Content
    // <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
    <div>
      {/* Working with Properties */}
      <p>
        I'm {props.name} and I am {props.age} years old!
      </p>
      {/* Understanding the "children" Prop */}
      <p>{props.children}</p>
    </div>
  );
};

export default person;
