import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import OriginStory from './components/OriginStory';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fbfcfd]">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <FeatureCards />
        <OriginStory />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
