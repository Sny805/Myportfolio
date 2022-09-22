import logo from './logo.svg';
import './App.css';
import Intro from './components/intro/Intro';
import ProjectsList from './components/ProjectsList/ProjectsList';
import Contact from './components/Contact/Contact';
import Hdcarausel from './3dcarousel/3dcarousel';
import Toggle from './components/Toggle/Toggle';
import { useContext } from 'react';
import { ThemeContext } from './components/Toggle/Context';


   

function App() {
   const theme = useContext(ThemeContext);
   const darkMode=theme.state.darkMode; 

   return (<div style={{backgroundColor: darkMode? "#222" :" white" ,color:darkMode && "white"}}>
      <Toggle />
      <Intro />
            <ProjectsList />
      <Contact />


   </div>);
}

export default App;
