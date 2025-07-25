import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Pages
import Services from './Components/Services';
import MenServices from './Components/MensService';
// import MenServices2 from './Components/MensService2';
// import WomenServices from './Components/WomensService'; 
import WomenServices2 from './Components/WomensService2'; 
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import FAQ from './Components/FAQ';
import Home from './Components/Home';
import WhatsAppButton from './Components/WhatsAppButton';
// import Location from './Components/Location';

function App() {
  return (
    <Router>
      <Navbar />

      {/* Main content area with spacing below sticky navbar and above footer */}
       <div> {/* style={{ paddingTop: '100px', paddingBottom: '60px', minHeight: 'calc(100vh - 160px)' } */}
        <Routes>
          {/* Optional: Homepage routing if needed later */}
          <Route path="/" element={<Home />} />

          {/* Wrap Services page with nested routes */}
          <Route path="/services" element={<Services />}>
            <Route path="men" element={<MenServices />} />
            {/* <Route path="men" element={<MenServices2 />} /> */}
            {/* {<Route path="women" element={<WomenServices />} /> } */}
            {<Route path="women" element={<WomenServices2 />} /> }
          </Route>

          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/FAQ" element={<FAQ />} />

          {/* Optional: 404 route for unknown paths */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>  
      <WhatsAppButton />

      <Footer />
    </Router>
  );
}

export default App;