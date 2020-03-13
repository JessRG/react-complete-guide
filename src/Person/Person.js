import React from 'react';

// The arrow function holds some advantages especially when it comes to the "this" keyword
const person = () => {
  return (
    // Outputting Dynamic Content
    <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
  );
};

export default person;
