import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import TopBanner from './components/top-banner';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/Section4';
import Testimonials from './components/Testimonials';
import GetInTouch from './components/getInTouch';

function App() {
  return (
    <div className="App">
      <img src='/Section1/gradient.png' alt='gradient' className='gradient gradient1' />
      <img src='/Section2/gradient.png' alt='gradient' className='gradient gradient2' />
      <img src='/Section3/gradient.png' alt='gradient' className='gradient gradient3' />
      <img src='/Section3/gradient.png' alt='gradient' className='gradient gradient4' />
      <img src='/Section3/gradient.png' alt='gradient' className='gradient gradient5' />
      <Navbar/>
      <TopBanner/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Testimonials/>
      <GetInTouch/>
    </div>
  );
}

export default App;
