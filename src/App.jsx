import React from 'react';
import useLocalStorage from 'use-local-storage';

import Nav from "./components/Nav/nav"
import Social from "./components/Social/social"
import Home from "./components/Home/home"
import Civil from "./components/Civil/civil"
import Aicomp from "./components/AiComp/aicomp"
import Webdev from "./components/WebDev/webdev"
import Education from "./components/Education/education"
import Other from "./components/Other/other"


function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className="app" data-theme={theme}>

      <button onClick={switchTheme} className={ theme === "light" ? "theme_light": "theme_dark"}>
        <label for="switch"> <span> {theme === 'light' ? 'Light' : 'Dark'} </span> </label> 
      </button>

      < Nav />
      < Social />
      < Home />
      < Civil />
      < Aicomp />
      < Webdev />
      < Education />
      < Other />    
    </div>
  );
}

export default App;