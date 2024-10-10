import storeImg from '../assets/store.png'

function Work() {
  return (
    <div className="mb-10 z-10">
            <h1 className="text-3xl font-bold font-sans text-white text-center p-8 z-10 relative">SOME OF MY WORK</h1>
            <div className="w-20 h-3 rounded-md mx-auto bg-sky-300 -mt-4 z-50 relative" />
        
        
        <div id="work" className='w-screen max-w-5xl mx-auto flex flex-col items-center sm:flex-row'>
          
        <div className="sm:w-4/6 w-5/6 m-5 aspect-5/3 rounded-lg bg-white relative truncate cursor-pointer">
          <a href="https://codepen.io/amin-aux/full/WNWLLYa" target="_blank" rel="noopener noreferrer">
            <img src="https://firebasestorage.googleapis.com/v0/b/x-clone-react.appspot.com/o/portfolioWorkImages%2F4%20(1).png?alt=media&token=4b3fa043-407f-4746-97a6-2355cdb7ec03" alt="non" className='w-full'/>
            <h1 className="absolute bottom-0 p-4 py-2 bg-sky-500 w-full text-center text-white text-lg font-semibold font-display">Weather App</h1>
          </a>
        </div>
        <div className="sm:w-4/6 w-5/6 m-5 aspect-5/3 rounded-lg bg-white relative truncate cursor-pointer">
          <a href="https://aminefathi10.github.io/x-clone-react/" target="_blank" rel="noopener noreferrer">
            <img className=' aspect-video object-cover' src="https://firebasestorage.googleapis.com/v0/b/x-clone-react.appspot.com/o/portfolioWorkImages%2F7.png?alt=media&token=e0bb74a2-a29f-433c-a8cb-53c6fd00340e" alt="" />
            <h1 className="absolute bottom-0 p-4 py-2 bg-sky-500 w-full text-center text-white text-lg font-semibold font-display">X clone</h1>
          </a>
        </div>
        <div className="sm:w-4/6 w-5/6 m-5 aspect-5/3 rounded-lg bg-white relative truncate overflow-hidden group">
          <div className='absolute w-full h-full bg-black opacity-0 group-hover:opacity-80 z-10 duration-100' />
          <div className="absolute w-full h-full z-20 flex flex-col justify-center gap-4 items-center">
            <a href="https://github.com/Aminefathi10/demo-webshop-nextjs-redux" target='_blank' className="w-3/4 py-2 text-md text-black bg-white text-center rounded-md font-semibold duration-200 scale-y-0 group-hover:scale-100 origin-top">View the source code</a>
            <a href="https://demo-webshop-nextjs-redux.vercel.app/" target='_blank' className="w-3/4 py-2 text-md text-black bg-white text-center rounded-md font-semibold duration-200 scale-y-0 group-hover:scale-100 origin-top">Visit The Website</a>
          </div>
            <img src={storeImg} alt=""  />
            <h1 className="absolute bottom-0 p-4 py-2 bg-sky-500 w-full text-center text-white text-lg font-semibold font-display">e-commerce website</h1>
        </div>
    </div></div>
  )
}

export default Work
