import React, { useState, useEffect } from 'react';

const ShowHide = () => {
const [show, setShow] = useState(false)

  return(
    <>
      {show && <Item />}
      <button className='btn'
        onClick={()=> setShow(!show)}
      >
        Show/Hide
      </button>
    </>
  )
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize);
    }
  }, [])

  return (
    <>
      <p>
        <strong>Window size: {size} </strong>
      </p>
    </>
  );
}

export default ShowHide;
