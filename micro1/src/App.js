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
      This is My Micro1's App.JS.
      <br />
      <br />
      <button onClick={() => dispatch({type: 'increment'})}>Increase Counter</button>

      <br />
      <br />

      <div style={{display: 'flex'}}>
        <button onClick={() => nav('/micro1')}>Micro1 Home</button>
        <button onClick={() => nav('/micro1/two')}>Micro1 Two</button>
        <button onClick={() => nav('/micro1/three')}>Micro1 Three</button>
      </div>

      <br />
      <br />
      <Routes>
        <Route path="/Micro1" element={<Home />} />
        <Route path="/Micro1/two" element={<Comp2 />} />
        <Route path="/Micro1/three" element={<Comp3 />} />
      </Routes>
    </div>
  );
}

export default App;
