import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('Random Title')

  const handleClick = () => {
    setText(text === 'Random Title' ? 'New Title!' : 'Random Title')
  }
  
  return(
    <>
      <h2>{text}</h2>
      <button className='btn'
        type='button'
        onClick={handleClick}
      >
        Change Title
      </button>
    </>
  )
};

export default UseStateBasics;
