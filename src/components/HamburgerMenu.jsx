

function Hamburger({burgermenu}){
    
  function handleClick(){
    burgermenu()
  }
      
    return(
    <div onClick={handleClick} className="w-8 h-5 flex flex-col m-4 justify-between top-1 z-20 absolute sm:hidden cursor-pointer">
      <div id="top" className="w-full h-0.5 bg-white rounded-md duration-200"></div>
      <div id="middle" className="w-full h-0.5 bg-white rounded-md duration-300"></div>
      <div id="bottom" className="w-full h-0.5 bg-white rounded-md duration-200"></div>
    </div>
    )
}
export default Hamburger