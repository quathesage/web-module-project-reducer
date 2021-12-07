import React, {useReducer} from 'react';
import reducer, {initialState} from '../reducers';
import { changeOperation, applyNumber, clearDisplay } from '../actions';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
const [state, dispatch] = useReducer(reducer, initialState);

const handleClick = (e) => {
  dispatch(applyNumber(e.target.value));
}

const operator = (e) => {
  dispatch(changeOperation(e.target.value));
}

const handleClear = ()=> {
  dispatch(clearDisplay());
}

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleClick} value={1}/>
              <CalcButton onClick={handleClick} value={2}/>
              <CalcButton onClick={handleClick} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleClick} value={4}/>
              <CalcButton onClick={handleClick} value={5}/>
              <CalcButton onClick={handleClick} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleClick} value={7}/>
              <CalcButton onClick={handleClick} value={8}/>
              <CalcButton onClick={handleClick} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={operator} value={"+"}/>
              <CalcButton onClick={operator} value={"*"}/>
              <CalcButton onClick={operator} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={handleClear} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
