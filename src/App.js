import React, {useState} from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';

// Pages
import Projects from './pages/projects';
import LearnMore from './pages/learn-more';

// Components
import Navigation from './components/navigation';
import Menu from './components/menu';
import Footer from './components/footer';

// Utils
import useWindowSize from './utils/useWindowSize';

const colorScheme = {
  primary: '#2c3e50',
  secondary: '#e74c3c',
  tertiary: '#f5f5f5'
}

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, ] = useWindowSize(setShowMenu);

  const AppWrapper = styled.section`
    margin-top: 6rem;
    width: 100vw;
  `;

  return (
    <div className="App">
      <Navigation 
        colorScheme={colorScheme} 
        setShowMenu={setShowMenu}
        showMenu={showMenu}
      />
      <AppWrapper>
      {
        showMenu && windowWidth < 880 ? 
        <Menu colorScheme={colorScheme}/>
        :
        <Switch>
          <Route exact path={"/"}>
              <Projects colorScheme={colorScheme}/>
          </Route>
          <Route path={"/learn-more/:id"}>
              <LearnMore colorScheme={colorScheme}/>
          </Route>
        </Switch>
      }
      <Footer 
        colorScheme={colorScheme} 
      />
      </AppWrapper>
    </div>
  );
}

export default App;
