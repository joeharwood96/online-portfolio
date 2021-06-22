import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

// Pages 
import HomePage from './pages/HomePage/HomePage';
import ResumePage from './pages/ResumePage/ResumePage';

// Components
import Links from './components/Links/Links';

function App() {
  
  return (
    <div className="App">
      {
        window.location.pathname === '/resume' ?
        null
        :
        <Links />
      }
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/resume'>
          <ResumePage />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
