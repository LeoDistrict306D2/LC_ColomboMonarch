import { useState, useCallback } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import District from './components/District';
import CorePillars from './components/CorePillars';
import Projects from './components/Projects';
import KeyEvents from './components/KeyEvents';
import Leadership from './components/Leadership';
import Legacy from './components/Legacy';
import Resources from './components/Resources';
import Footer from './components/Footer';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <OurStory />
        <District />
        <CorePillars />
        <Projects />
        <KeyEvents />
        <Leadership />
        <Legacy />
        <Resources />
        <Footer />
      </div>
    </>
  );
}

export default App;
