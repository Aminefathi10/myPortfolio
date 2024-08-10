

const Footer = () => {
  return (
    <div className='w-screen bg-black text-white px-4 py-10 relative'> 
        <a href="#home" className='absolute top-0 border-2 border-sky-500 text-sky-500 w-10 h-10 flex justify-center items-center rounded-full text-2xl right-1/2 translate-x-1/2 -translate-y-1/2'><i className="fa-solid fa-arrow-up"></i></a>
        <h1 className='font-semibold'>Social</h1>
        <a className='mr-1' href="https://www.linkedin.com/in/amine-fathi-580bb02b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel='noreferrer'><i className="fa-brands fa-linkedin text-white text-2xl hover:text-sky-500 mr-1"></i></a>
        <a className='mr-1' href="https://github.com/Aminefathi10" target="_blank" rel='noreferrer'><i className="fa-brands fa-github text-white text-2xl hover:text-sky-500 mr-1"></i></a>
        <a className='mr-1' href="https://www.facebook.com/profile.php?id=100037102692892&mibextid=ZbWKwL" target="_blank" rel='noreferrer'><i className="fa-brands fa-facebook text-white text-2xl hover:text-sky-500 mr-1"></i></a>
        <a className='mr-1' href="https://www.instagram.com/leehuwak7?igsh=MWtlNjRudmVya2lzYg==" target="_blank" rel='noreferrer'><i className="fa-brands fa-instagram text-white text-2xl hover:text-sky-500"></i></a>
        <hr className='w-full mx-auto my-6'/>
        <div className='flex justify-center items-center'>
          <p className='text-gray-700 text-center text-sm inline-block mr-1'><i className="fa-regular fa-copyright"></i>Copyright 2024</p>
        <i className="fa-brands fa-react text-sky-600 text-2xl inline-block animate-spin duration-1000"></i>
        </div>
        
    </div>
  )
}

export default Footer
