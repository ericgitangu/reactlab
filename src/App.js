import React, {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value));
    resetInput(e)
  }; 
 
  function minus(e) { 
  	e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value));
    resetInput(e)
  };
 
  function times(e) { 
    e.preventDefault();
    if (result === 0) {
      setResult(1);
    }
    setResult((result) => result * Number(inputRef.current.value));
    resetInput(e);
  }; 
 
  function divide(e) { 
    e.preventDefault();
    try {
      setResult((result) => result / Number(inputRef.current.value));
    } catch (err) {
      console.error(err)
      setResult(0)
    } finally {
      resetInput(e);
    }
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = "";
  }; 
 
  function resetResult(e) { 
  	e.preventDefault(); 
    setResult(0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {/* add the value of the current total */}
          Result: {result}
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        {/* Add the subtract button */}
        <button onClick={minus}>subtract</button>
        {/* Add the multiply button */}
        <button onClick={times}>multiply</button>
        {/* Add the divide button */}
        <button onClick={divide}>divide</button>
        {/* Add the resetInput button */}
        <button onClick={resetInput}>reset input</button>
        {/* Add the resetResult button */}
        <button onClick={resetResult}>rest result</button>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
