//for redux
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decNumber, incNumber } from './actions';

import './App.css';


function App() {
  const upDownFunction = useSelector(state => state.upDownFunction)
  const dispatch = useDispatch()
  const [checkZeroVal, setCheckZeroVal] = useState(false)

const changeInput = () => {
  //testing................................................................
}

useEffect(() => {
  if (upDownFunction === 0 ) {
    setCheckZeroVal(true)
  }else{
    setCheckZeroVal(false)
  }
})

const difNum = 5;

  return (
    <div className="App">
        <h1>Counter</h1>
        <div className="quantity">
          <button title='Decrement' disabled={ checkZeroVal && "disabled" } onClick={() => dispatch(decNumber(difNum))}>-</button>
          <input type="text" value={upDownFunction} onChange={changeInput}/>
          <button title='Increment' onClick={() => dispatch(incNumber(difNum))}>+</button>
        </div>
    </div>
  );
}

export default App;
