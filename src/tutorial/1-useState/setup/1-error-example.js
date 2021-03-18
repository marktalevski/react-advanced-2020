import React from 'react';

const ErrorExample = () => {
  let title = 'Random Title'

  const handleClick = () => {
    title = 'Hello People!'
    console.log(title);
  }


  return(
    <>
      <h2>Random Title</h2>
      <button className='btn'
        type='button'
        onClick={handleClick}
      >
        Change Title
      </button>
    </>
  )
};

export default ErrorExample;
