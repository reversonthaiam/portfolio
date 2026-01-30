import { useState } from "react";

// Componentes de Layout
//import Footer from './components/layout/Footer'

// Seções do Portfolio
import Index from "./components/pages/index";
import Header from "./components/layout/Header";
import About from './components/pages/about'
import Projects from './components/pages/projects'
import Footer from './components/pages/footer'
import Contact from './components/pages/contact'

function App() {
  return (
    <div className="bg-background h-full w-full">
      <Header />
      <Index />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
