import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import "./styles/contact.css";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <Stats />

      <Services />

      <About />

      <Portfolio />

      <Process />

      <Contact />

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default App;