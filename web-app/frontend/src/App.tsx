import React from 'react';
import FrontPage from './components/frontpage/FrontPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
      </Routes>   
    </Router>
  );
}

export default App;
