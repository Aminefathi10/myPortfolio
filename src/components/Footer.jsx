
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Footer = () => {
  return (
    <div className='w-screen bg-black text-white px-4 py-10 relative'> 
        <a href="#home" className='absolute top-0 border-2 border-sky-500 text-sky-500 w-10 h-10 flex justify-center items-center rounded-full text-2xl right-1/2 translate-x-1/2 -translate-y-1/2'>
        <ArrowUpwardIcon className='' /></a>
        <h1 className='font-semibold'>Social</h1>
        <a className='mr-1' href="https://www.linkedin.com/in/amine-fathi-580bb02b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel='noreferrer'><LinkedInIcon className=" text-white text-2xl hover:text-sky-500 mr-1" /></a>
        <a className='mr-1' href="https://github.com/Aminefathi10" target="_blank" rel='noreferrer'><GitHubIcon className=" text-white text-2xl hover:text-sky-500 mr-1" /></a>
        <a className='mr-1' href="https://www.facebook.com/profile.php?id=100037102692892&mibextid=ZbWKwL" target="_blank" rel='noreferrer'><FacebookIcon className=" text-white text-2xl hover:text-sky-500 mr-1" /></a>
        <a className='mr-1' href="https://wa.me/qr/BKKKBJKGCVLHD1" target="_blank" rel='noreferrer'>
        <WhatsAppIcon className=" text-white text-2xl hover:text-sky-500 mr-1" /></a>
        <hr className='w-full mx-auto my-6'/>
        <div className='flex justify-center items-center'>
          <p className='text-gray-700 text-center text-sm inline-block mr-1'><i className="fa-regular fa-copyright"></i>Copyright 2024</p>
        <svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="uwu-hidden mt-4 mb-3 text-brand dark:text-brand-dark w-5 self-center me-0 origin-center transition-all ease-in-out text-2xl inline-block animate-spin duration-1000 text-sky-600"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
        </div>
        
    </div>
  )
}

export default Footer
