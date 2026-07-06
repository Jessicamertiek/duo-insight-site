import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";

import "./styles/contact.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Contact />
      <WhatsAppButton />
    </>
  );
}

export default App;