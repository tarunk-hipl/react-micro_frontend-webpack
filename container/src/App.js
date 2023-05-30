import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SubAAppLazy = lazy(() => import('./microApp'));
const SubBAppLazy = lazy(() => import('./micro2App'));

function App() {
  const nav = useNavigate();
  const { counter } = useSelector((state) => state.red)

  return (
    <div className="App">
      <h1 className="heading">This is my container</h1>
      <p className="counter Value">Counter value is ::: <span>{counter}</span></p>

      <br />
      <div style={{display: 'flex'}}>
        <button onClick={() => nav('/micro1', { reload: true })}>Micro1 App</button>
        <button onClick={() => nav('/micro2', { reload: true })}>Micro 2 App</button>
      </div>

      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/micro1/*" element={<SubAAppLazy />} />
          <Route path="/micro2/*" element={<SubBAppLazy />} />
        </Routes>
      </Suspense>
      <hr />
      <br />
      <h1 className="heading">This is my container</h1>
    </div>
  );
}

export default App;
