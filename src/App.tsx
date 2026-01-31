import Index from "./pages/index/index";
import Header from "./components/layout/Header";
import About from './pages/about'
import Projects from './pages/projects'
import Footer from './pages/footer'
import Contact from './pages/contact'

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
