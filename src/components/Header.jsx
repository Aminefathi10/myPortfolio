import { useEffect } from "react";



function Header({menuItem}) {

  useEffect(() => {
    window.addEventListener("resize", () => {
      if(window.innerWidth >= 640 && !document.getElementById("nav-bar").classList.contains("-translate-x-full"))
      menuItem();
    })
  })
    
  function handleClick(){
    if(window.innerWidth < 640){
      menuItem();
    }
      
  }
  
        return(
        <nav id="nav-bar" className="w-full absolute h-screen bg-gray-800 opacity-80 z-10 -translate-x-full duration-100 truncate sm:overflow-visible sm:h-fit sm:translate-x-0 sm:flex sm:justify-center sm:opacity-100 box-border ">
          <div className="top-14 absolute sm:top-0 sm:flex  sm:mx-auto">
            <div onClick={handleClick} className="font-bold font-display text-3xl text-sky-400 p-2 pb-0 border-b-2 w-screen sm:text-xl sm:text-white sm:hover:text-sky-500 sm:border-none sm:w-fit"><a className="w-full block" href="#home">Home</a></div>
            <div onClick={handleClick} className="font-bold font-display text-3xl text-sky-400 p-2 pb-0 border-b-2 w-full sm:text-xl sm:text-white sm:hover:text-sky-500 sm:border-none sm:w-fit"><a className="w-full block" href="#about">about</a></div>
            <div onClick={handleClick} className="font-bold font-display text-3xl text-sky-400 p-2 pb-0 border-b-2 w-full sm:text-xl sm:text-white sm:hover:text-sky-500 sm:border-none sm:w-fit"><a className="w-full block" href="#work">Work</a></div>
            <div onClick={handleClick} className="font-bold font-display text-3xl text-sky-400 p-2 pb-0 border-b-2 w-full sm:text-xl sm:text-white sm:hover:text-sky-500 sm:border-none sm:w-fit"><a className="w-full block" href="#contact">Contact</a></div>
          </div>
      </nav>
        )
    }



export default Header