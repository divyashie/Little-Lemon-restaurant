import './App.css';
import React from "react"; 
import { BrowserRouter as Router } from "react-router-dom"; // Ensure BrowserRouter is imported here
import NavigationBar from "./components/NavigationBar"; 
import Footer from "./components/Footer"; 
import Routing from "./components/Routing";


function App() {
  return (
      <>
        <Router>
          <NavigationBar/>
          <Routing/>
          <Footer/> 
        </Router>
       </>
  );
}

export default App;
