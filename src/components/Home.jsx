import React from 'react'
import { Typewriter } from 'react-simple-typewriter'


function Home() {
    
    
    return(
    <div id="home" className="h-screen relative w-screen box-border bg-dark-bg  flex flex-col justify-center items-center bg-bottom bg-cover">
        <h1 className="text-yellow-400 text-5xl mb-2 font-bold"> 
        <Typewriter words={['Hey there,']} typeSpeed={50}  cursor deleteSpeed={50} loop/>
        </h1>
        <h1 className="font-sm text-white font-semibold">my name is amine, I am a web developer</h1>
        <div className="w-fit mx-auto mt-2">
        <a className='mr-1' href="https://www.linkedin.com/in/amine-fathi-580bb02b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel='noreferrer'><i className="fa-brands fa-linkedin text-white text-2xl hover:text-sky-500 mr-1"></i></a>
        <a className='mr-1' href="https://github.com/Aminefathi10" target="_blank" rel='noreferrer'><i className="fa-brands fa-github text-white text-2xl hover:text-sky-500 mr-1"></i></a>
        <a className='mr-1' href="https://www.facebook.com/profile.php?id=100037102692892&mibextid=ZbWKwL" target="_blank" rel='noreferrer'><i className="fa-brands fa-facebook text-white text-2xl hover:text-sky-500 mr-1"></i></a>
        <a className='mr-1' href="https://www.instagram.com/leehuwak7?igsh=MWtlNjRudmVya2lzYg==" target="_blank" rel='noreferrer'>
        <i className="fa-brands fa-instagram text-white text-2xl hover:text-sky-500"></i></a>
        </div>
        <i className="fa-solid fa-arrow-down text-2xl w-10 h-10 text-white absolute bottom-0 animate-bounce border-2 pb-0 flex justify-center items-center rounded-full"></i>
        
    </div>
    )
}

export default Home