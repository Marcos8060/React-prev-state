import './App.css';
import React,{useState,useEffect,useRef} from 'react';

function App() {
  const [ count,setCount] = useState(0)

  const prevCount = useRef();

  useEffect(() =>{
    prevCount.current = count
  },[count])

  return (
    <div className="App">
      <h2>Now: {count} Previous: {prevCount.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;
