import './App.css';
import React from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar"; 
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
import Home from "./pages/Home"; 
import About from "./pages/About"; 
import Menu from "./pages/Menu"; 
import Reservations from "./pages/Reservations"; 
import OrderOnline from "./pages/OrderOnline"; 
import Login from "./pages/Login"; 

function App() {
  return (
   <Router>
      <div>
        <Header />
        <NavigationBar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/order-online" element={<OrderOnline />} />
            <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
       </div>
   </Router>
  );
}

export default App;
