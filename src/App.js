import React, {useState} from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

// Pages
import AboutMe from './pages/about-me';
import Projects from './pages/projects';

// Components
import Navigation from './components/navigation';
import Menu from './components/menu';

// Utils
import useWindowSize from './utils/useWindowSize';

const colorScheme = {
  primary: '#525E67',
  secondary: '#FCB03A',
  tertiary: '#f5f5f5'
}

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, ] = useWindowSize(setShowMenu);

  return (
    <div className="App">
      <Navigation 
        colorScheme={colorScheme} 
        setShowMenu={setShowMenu}
        showMenu={showMenu}
      />
      {
        showMenu && windowWidth < 880 ? 
        <Menu colorScheme={colorScheme}/>
        :
        <Switch>
          <Route exact path="/">
              <Projects colorScheme={colorScheme}/>
          </Route>
          <Route path="/about-me">
              <AboutMe colorScheme={colorScheme}/>
          </Route>
        </Switch>
      }
    </div>
  );
}

export default App;
