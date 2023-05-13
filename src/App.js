import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Home from './components/Title/Home';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';
import Educ from './components/Educ/Educ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Nav />
      <div>
        <Home></Home>
        <Skills></Skills>
        <Project></Project>
        <Educ></Educ>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
