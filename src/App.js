import React from 'react';

// Pages
import HomePage from './pages/home-page';

// Components
import Navigation from './components/navigation';



const colorScheme = {
  primary: '#525E67',
  secondary: '#FCB03A',
  tertiary: '#f5f5f5'
}

function App() {
  return (
    <div className="App">
      <Navigation colorScheme={colorScheme} />
      <HomePage colorScheme={colorScheme}/>
    </div>
  );
}

export default App;
