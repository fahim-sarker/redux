import React from 'react'
import "./header.css"
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../slice/Reduxslice';

const Header = () => {
  let data = useSelector((state) => state.counter.value)
  console.log(data);
  let dispatch = useDispatch()
  let handleincrement = () => {
    dispatch(increment())
  }
  let handledecrement = () => {
    dispatch(decrement())
  }

  return (
    <>
      <div className="main">
        <button onClick={handleincrement} className='incremenet'>increment</button>
        <div className="middle">{data}</div>
        <button onClick={handledecrement} className='decrement'>decrement</button>
      </div>

    </>
  )
}

export default Header
