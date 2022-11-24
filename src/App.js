
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Copyright from './components/Copyright';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Project from './components/Project';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Project/>
      <Experience/>
      <Contact/>
      <Copyright/>
      <SocialLinks/>
    </div>
  );
}

export default App;
