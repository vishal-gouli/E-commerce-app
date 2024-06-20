import './App.css';
import Navbar from './Navbar/Navbar';
import About from './RoutingPropcess/About';
import Products from './RoutingPropcess/Products';
import Founder from './RoutingPropcess/Founder';
import { Contact } from './RoutingPropcess/Contact';
// import Home from './Home';

import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './Home';


function App() {

  let dummyfunc=(a)=>{
    
  }
  return (
    <>
    <BrowserRouter >
       <Navbar func={dummyfunc} />
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/about" element={<About/>}/>
       <Route path="/products" element={<Products/>}/>
       <Route path="/founders" element={<Founder />}/>
       <Route path="/contact" element={<Contact />}/>
    </Routes>
    </BrowserRouter>

   

    </>
  );
}

export default App;
