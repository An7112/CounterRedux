import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './actions/counter';
function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  return (
   <div>
    <h1>Counter {counter}</h1>
    <button onClick={() => dispatch(increment(5))}>INCREMENT</button>
    <button onClick={() => dispatch(decrement(5))}>DECREMENT</button>
   </div>
  );
}

export default App;
