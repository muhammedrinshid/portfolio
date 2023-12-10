import './App.css';
import Navbar from './components/Navbar';
import About from './sections/About';
import Academics from './sections/Academics';
import Certifications from './sections/Certifications';
import Connext from './sections/Connext';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Technologies from './sections/Technologies';

function App() {
  return (
    <div className="App bg-primary    w-full">
      <main className='relative max-container padding-x'>
      <Navbar/>
      <Hero/>
      <Skills/>
      <About/>
      <Projects/>
      <Certifications/>
      <Technologies/>
      <Academics/>
      <Connext/>
      
    
      </main>
      <Footer/>

    </div>
  );
}

export default App;
