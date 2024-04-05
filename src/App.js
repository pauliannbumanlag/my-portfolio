import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Header />
      <div className="flex-grow">
        <div className="container mx-auto px-6 py-12">
          <Skills />
          <Projects />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
