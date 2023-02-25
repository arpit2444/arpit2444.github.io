import logo from './logo.svg';
import './App.css';


import Skills from './Components/Skills/Skills';
import Project from './Components/Project/Project';
import Footer from './Components/Footer/Footer';
import Calender from './Components/Calender/Calender';
import Hero from './Components/Hero/Hero';
import { Navbar } from './Components/Navbar/Navbar';
import Stats from './Components/Stats/Stats';
function App() {
  return (
    <div className="App">

<Navbar/>
<Hero/>
<Project/>
<Skills/>
<Calender/>
<Stats/>
<Footer/>

    </div>
  );
}

export default App;
