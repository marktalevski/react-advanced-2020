import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('The internet is not a series of tubes');
  const [isError, setIsError] = useState(true)

  return(
    <>
      <h1>{!isError ? setText(text) : setText('Error...')}</h1>
      <button className='btn'
        onClick={()=> setIsError(!isError)}
      >
        Toggle Error
      </button>
    </>
  ) 
};

export default ShortCircuit;
