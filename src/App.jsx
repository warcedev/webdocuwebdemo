import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Benefits from './components/Benefits.jsx';
import Modules from './components/Modules.jsx';
import Downloads from './components/Downloads.jsx';
import Faq from './components/Faq.jsx';
import Footer from './components/Footer.jsx';
import { useDevice } from './useDevice.js';
import { useReveal } from './useReveal.js';

export default function App() {
  const device = useDevice();
  useReveal();

  return (
    <>
      <Header />
      <main>
        <Hero device={device} />
        <Benefits />
        <Modules />
        <Downloads device={device} />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
