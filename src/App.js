import logo from './logo.svg';
import './App.css';
import About from './About';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import ContactForm from './Contact';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <ContactForm/>
    </div>
  );
}

export default App;
