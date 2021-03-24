import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [submit, setSubmit] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmit(e.target.value)
  }

  return (
    <>
      <article>
        <form className='form'
          onSubmit={handleSubmit}
        >
          <div className='form-control'>
            <label htmlFor='firstName'>
              Name:
            </label>
            <input id='firstName' name='firstName' 
              type='text' />
          </div>

          <div className='form-control'>
            <label htmlFor='email'>
              Email:
            </label>
            <input id='email' name='email' 
              type='text' />
          </div>
          <button type='submit'>
            Add Person
          </button>
        </form>
      </article>
    </>
  );
};

export default ControlledInputs;
