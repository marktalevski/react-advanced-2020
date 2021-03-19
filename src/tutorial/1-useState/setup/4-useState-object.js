import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Mark',
    age: 32,
    message: 'Random message'
  })
  const { name, age, message } = person;

  const changeMessage = () => {
    setPerson(
      {
        ...person, 
        message: 'OH HAI MARK!'
      }
    )
  }

  return(
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn'
        onClick={changeMessage}
      >
        Change Message
      </button>
    </>
  ) 
};

export default UseStateObject;