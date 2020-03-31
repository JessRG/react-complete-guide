import React from 'react';
// import Radium from 'radium';
import styled from 'styled-components';

// Add styling with css stylesheet
// import './Person.css';

// The arrow function holds some advantages especially when it comes to the "this" keyword
// You should use function components as often as possible because state must be handled with care
// Having state in all your components and manipulating it from anywhere within your app will make the app quickly unpredictable and hard to manage especially as it grows
// Stateless component -> a component that does not manage or manipulate state internally
// This person component is a stateless component ("presentational" components) because it has no internal state management
const person = (props) => {
  // style defined for implementation with Radium package
  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px'
  //   }
  // };

  const StyledDiv = styled.div`
      width: 60%;
      margin: 16px auto;
      border: 1px solid #eee;
      box-shadow: 0 2px 3px #ccc;
      padding: 16px;
      text-align: center;
    }
    
    @media (min-width: 500px) {
        width: 450px;
    }
    `;

  return (
    // Outputting Dynamic Content
    // <div className='Person' style={style}>
    <StyledDiv>
      {/* Working with Properties */}
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      {/* Understanding the "children" Prop */}
      <p>{props.children}</p>
      {/* Added two way binding (onChange property)
       Now we can set this up in a dynamic way by setting up the
       persons object in app with a change handler method */}
      <input type='text' onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

// export default Radium(person);
export default person;
