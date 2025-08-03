import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={
              <>
                <h2>Sign Up</h2>
                <SignupForm />
              </>
            } />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;