import Navbar from "./Components/navbar/Navbar.jsx";
import Hero from "./Components/hero/Hero.jsx";
import About from "./Components/about/About.jsx";
import Services from "./Components/services/Services.jsx";
import Footer from "./Components/footer/Footer.jsx";
import Skills from "./Components/skill/Skills.jsx";
import Contacts from "./Components/contact/Contacts.jsx";
import Projects from "./Components/project/Project.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
