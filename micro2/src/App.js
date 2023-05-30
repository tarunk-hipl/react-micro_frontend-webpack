import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Comp2, Comp3 } from "./components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function App() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      This is My Micro2's App.JS.
      <br />
      <br />

      <button onClick={() => dispatch({type: 'decrement'})}>Descrease Counter</button>

      <br />
      <br />
    
      <div style={{display: 'flex'}}>
        <button onClick={() => nav('/micro2')}>Micro2 Home</button>
        <button onClick={() => nav('/micro2/two')}>Micro2 Two</button>
        <button onClick={() => nav('/micro2/three')}>Micro2 Three</button>
      </div>

      <br />
      <br />
      <Routes>
        <Route path="/micro2" element={<Home />} />
        <Route path="/micro2/two" element={<Comp2 />} />
        <Route path="/micro2/three" element={<Comp3 />} />
      </Routes>
    </div>
  );
}

export default App;
