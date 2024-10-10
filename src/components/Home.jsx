
import { Typewriter } from 'react-simple-typewriter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function Home() {
    
    
    return(
    <div id="home" className="h-screen relative w-screen box-border bg-dark-bg  flex flex-col justify-center items-center bg-bottom bg-cover">
        <h1 className="text-yellow-400 text-5xl mb-2 font-bold"> 
        <Typewriter words={['Hey there,']} typeSpeed={50}  cursor deleteSpeed={50} loop/>
        </h1>
        <h1 className="font-sm text-white font-semibold">my name is amine, I am a web developer</h1>
        <div className="w-fit mx-auto mt-2">
        <a className='mr-1' href="https://www.linkedin.com/in/amine-fathi-580bb02b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel='noreferrer'><LinkedInIcon className=" text-white text-2xl hover:text-sky-500 mr-1" /></a>
        <a className='mr-1' href="https://github.com/Aminefathi10" target="_blank" rel='noreferrer'><GitHubIcon className=" text-white text-2xl hover:text-sky-500 mr-1" /></a>
        <a className='mr-1' href="https://www.facebook.com/profile.php?id=100037102692892&mibextid=ZbWKwL" target="_blank" rel='noreferrer'><FacebookIcon className=" text-white text-2xl hover:text-sky-500 mr-1" /></a>
        <a className='mr-1' href="https://wa.me/qr/BKKKBJKGCVLHD1" target="_blank" rel='noreferrer'>
        <WhatsAppIcon className=" text-white text-2xl hover:text-sky-500 mr-1" /></a>
        </div>
        <KeyboardDoubleArrowDownIcon className="text-2xl w-10 h-10 text-white absolute bottom-0 animate-bounce border-2 pb-0 flex justify-center items-center rounded-full" />
        
    </div>
    )
}

export default Home