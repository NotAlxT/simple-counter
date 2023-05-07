import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ClockTimer from './components/clock-timer';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<> <ClockTimer /></>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
