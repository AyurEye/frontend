import './App.css';
import Navbar from './components/navbar/navbar';
import Herosection from './components/herosection/herosection';
import Benefit from './components/benefit/benefit'
import Getstarted from './components/getstarted/getstarted';
import Dropfile from './components/dropfile/dropfile';
import Contributors from './components/contributors/contributors';
import Footer from './components/footer/footer';


function App() {
  return (
    <>
   <Navbar/>
   <Herosection/>
   <Benefit/>
   <Getstarted/>
   <Dropfile/>
   <Contributors/>
   <Footer />
   </>
  );
}

export default App;
