import { useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <LandingPage />
  )
}

export default App;
