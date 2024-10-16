import InvestmentSection from './components/InvestmentSection';
import FeaturesSection from './components/FeaturesSection';
import AboutSection from './components/AboutSection';
import TokenomicsSection from './components/TokenomicsSection';
import RoadmapSection from './components/RoadmapSection';
import ExploreSection from './components/ExploreSection';
import FooterSection from './components/FooterSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <InvestmentSection /> 
      <FeaturesSection />
      <AboutSection />
      <TokenomicsSection />
      <RoadmapSection />
      <ExploreSection />
      <FooterSection />
    </div>
  );
}

export default App;
