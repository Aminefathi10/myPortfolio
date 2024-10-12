import './App.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Hamburger from './components/HamburgerMenu.jsx';
import About from './components/About.jsx';
import Work from './components/Work.jsx';
import Contact from './components/Contact.jsx';
import "@lottiefiles/lottie-player";
import Footer from './components/Footer.jsx';
import { useState, useEffect } from "react";


function App() {  
  
  function navbar(){
    const navBar = document.getElementById("nav-bar");
    if(navBar.classList.contains("-translate-x-full")){
      navBar.classList.remove("-translate-x-full");
    } else {
      navBar.classList.add("-translate-x-full");
    }
  }
  function menu(){
    const topBar = document.getElementById("top");
    const middle = document.getElementById("middle");
    const botBar = document.getElementById("bottom");

    if(topBar.classList.contains("rotate-45")){
      topBar.classList.remove("rotate-45", "translate-y-0.56");
      middle.classList.remove("-translate-x-16");
      botBar.classList.remove("-rotate-45", "-translate-y-0.56");
    } else{
      topBar.classList.add("rotate-45", "translate-y-0.56");
      middle.classList.add("-translate-x-16");
      botBar.classList.add("-rotate-45", "-translate-y-0.56");
    }
    navbar();
    document.body.classList.toggle("truncate");
  };
  const [ loading, setLoading ] = useState(true);
  
  useEffect(() => {
    async function handleLoading() {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    }
    handleLoading();
  }, []);

 return(
  <div className='overflow-x-hidden bg-gray-900 relative font-body'>
    { loading ? (<lottie-player style={{width: "100vw", height: "100vh", }} src="https://lottie.host/37df4b63-bb72-4477-8f8c-753a3734b717/q7XkTqwdB1.json" background="##ffffff" speed="1" loop autoplay direction="1" mode="normal" />): 
      (<>
      <Hamburger burgermenu={menu} />
      <Header menuItem={menu} />
      <Home />    
      <About />
      <Work />
      <Contact />
      <Footer />
    </>)
    }
  </div>
 )
}

export default App;
