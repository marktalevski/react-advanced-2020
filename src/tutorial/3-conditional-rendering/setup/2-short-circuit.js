import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [isError, setIsError] = useState(true)

  return (
    <>
      <h1>
        {isError ? 'Error...' : 'o hai Mark!'}
      </h1>
      <button className='btn' 
        onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
    </>
  ); 
};

export default ShortCircuit;
