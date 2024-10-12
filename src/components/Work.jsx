import storeImg from '../assets/store.png'
import xClone from '../assets/x.png'

function Work() {
  return (
    <div className="mb-10 z-10">
            <h1 className="text-3xl font-bold font-sans text-white text-center p-8 z-10 relative">SOME OF MY WORK</h1>
            <div className="w-20 h-3 rounded-md mx-auto bg-sky-300 -mt-4 z-50 relative" />
        
        
        <div id="work" className='w-screen max-w-5xl mx-auto flex flex-col items-center sm:flex-row my-5'>
          
        

        <div className="w-5/6 sm:w-3/7 aspect-video rounded-xl relative truncate overflow-hidden group">
          <div className='absolute w-full h-full bg-black rounded-xl opacity-0 group-hover:opacity-80 z-10 duration-100' />
          <div className="absolute w-full h-full z-20 flex flex-col justify-center gap-4 items-center">
            <a href="https://github.com/Aminefathi10/x-clone-react" target='_blank' className="w-3/4 py-2 text-md text-black bg-white text-center rounded-md font-semibold duration-200 scale-y-0 group-hover:scale-100 origin-top">View the source code</a>
            <a href="https://aminefathi10.github.io/x-clone-react/" target='_blank' className="w-3/4 py-2 text-md text-black bg-white text-center rounded-md font-semibold duration-200 scale-y-0 group-hover:scale-100 origin-top">Visit The Website</a>
          </div>
            <img src={xClone} alt="" className='h-full object-cover'  />
            <h1 className="absolute bottom-0 p-4 py-2 bg-sky-600 w-full text-center text-white text-xl font-semibold font-display">X Clone, with react and tailwind</h1>
        </div>

        <div className="w-5/6 sm:w-3/7 aspect-video m-5  rounded-xl relative truncate overflow-hidden group">
          <div className='absolute w-full h-full bg-black rounded-xl opacity-0 group-hover:opacity-80 z-10 duration-100' />
          <div className="absolute w-full h-full z-20 flex flex-col justify-center gap-4 items-center">
            <a href="https://github.com/Aminefathi10/demo-webshop-nextjs-redux" target='_blank' className="w-3/4 py-2 text-md text-black bg-white text-center rounded-md font-semibold duration-200 scale-y-0 group-hover:scale-100 origin-top">View the source code</a>
            <a href="https://demo-webshop-nextjs-redux.vercel.app/" target='_blank' className="w-3/4 py-2 text-md text-black bg-white text-center rounded-md font-semibold duration-200 scale-y-0 group-hover:scale-100 origin-top">Visit The Website</a>
          </div>
            <img src={storeImg} alt="" className='object-cover h-full' />
            <h1 className="absolute bottom-0 p-4 py-2 bg-sky-600 w-full text-center text-white text-xl font-semibold font-display">e-commerce website, with next and tailwind</h1>
        </div>
    </div></div>
  )
}

export default Work
