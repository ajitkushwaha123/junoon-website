import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';

import Main from './components/main'; 
import Gallery from './components/Gallery';
import Instagram from './components/Instagram';
import Footer from './components/Footer';

function App() {
  return (
    <>
       <Header/>
       <Navbar/>
       <Main/>
       <Gallery/>
       <Instagram/>
       <Footer/>
    </>
  );
}

export default App;
