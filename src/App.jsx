import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Techstack from "./components/Techstack";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Projects from "./components/Project";

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Home />
        <About />
         <Techstack />
        <Projects />
        
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;