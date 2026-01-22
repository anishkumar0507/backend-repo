
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import YouTubeSection from './components/YouTubeSection';
import ShortsSection from './components/ShortsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <WhySection />
        <YouTubeSection />
        <ShortsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
