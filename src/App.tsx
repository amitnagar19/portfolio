import { useTheme } from './hooks/useTheme';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css';

function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <Nav theme={theme} onToggle={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer>
        <p>Amit Nagar · Vienna, Austria</p>
      </footer>
    </>
  );
}

export default App;
