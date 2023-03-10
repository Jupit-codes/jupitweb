import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './container/Home'
import Aboutus from './container/Aboutus'
import Policy from './container/Policy'
import Terms from './container/Terms'
import Aml from './container/Aml'
import OTC from './container/otc'
import CRYTOASSET from './container/cryptoasset'
import GIFTCARD from './container/giftcard'
import BLOG from './container/blog'
import FAQ from './container/Faq'
import CONTACT from './container/contact'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react';
function App() {
  const [isLoading, setLoading] = useState(true);
  const [modal,setmodal] = useState(true);
  
  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 500));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      // const el = document.querySelector(".loader-container");
      const el = document.querySelector(".loader-container")
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/privacy-policy" element={<Policy />} />
          <Route path="/otc" element={<OTC />} />
          <Route path="/our-cryptoasset" element={<CRYTOASSET />} />
          <Route path="/our-giftcard" element={<GIFTCARD />} />
          <Route path="/blog" element={<BLOG/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/contact" element={<CONTACT/>} />
          <Route path="/terms-of-service" element={<Terms/>} />
          <Route path="/aml-policy" element={<Aml/>} />

        </Routes>
    </div>
  );
}

export default App;
