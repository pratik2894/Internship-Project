import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Our from './components/Our';
import OurFeatures from './components/OurFeatures';
import Pricing from './components/Pricing';
import Map from './components/map';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
function App() {
  return (
<>
        <Nav/>
        <Hero/>
        <Our/>
        <OurFeatures/>
      <Pricing/>
      <Map/>
      <Testimonials/>
      <Footer/>
</>
  );
}

export default App;
