

function About(){

    return(
    <div id="about" className="w-screen z-0  min-h-72 pb-5 relative">
        <lottie-player style={{width: "100%", maxWidth: "800px", height: "750px", position: "absolute", top: "0", right: "0", zIndex: "-1"}} src="https://lottie.host/155121d4-6a00-4fe6-96b3-2abdebf8bc74/uZ7GIFBbWU.json" speed="1" loop autoplay direction="1" mode="normal" />
        <h1 className="z-100 text-3xl font-bold font-sans text-white text-center p-8">ABOUT ME</h1>
        <div className="z-100 w-20 h-3 rounded-md mx-auto bg-sky-300 -mt-4" />
        <div className="z-10 sm:flex max-w-4xl mx-auto">
        <div className="text-bold font-sans text-md text-white my-4 p-4 flex-1">I'm a motivated front-end developer with a knack for creating user-
            friendly web applications using HTML, CSS, and JavaScript. With 
            hands-on experience in web development, I've also honed my 
            customer service skills through roles as a cashier and sales 
            associate. I thrive in fast-paced environments and am committed 
            to continuous learning and growth in the tech industry. My 
            background in diverse roles has equipped me with strong 
            communication and problem-solving abilities, making me a well-
            rounded candidate for any team.</div>
        <div className="flex-1">
        <h1 className="text-4xl font-display text-gray-300 m-2 mb-5 mt-7">Skills:</h1>
        <span className="bg-gray-600 text-gray-50 text-lg px-4 py-2 rounded-md m-1.5 inline-block">HTML</span>
        <span className="bg-gray-600 text-gray-50 text-lg px-4 py-2 rounded-md m-1.5 inline-block">CSS</span>
        <span className="bg-gray-600 text-gray-50 text-lg px-4 py-2 rounded-md m-1.5 inline-block">javaScript</span>
        <span className="bg-gray-600 text-gray-50 text-lg px-4 py-2 rounded-md m-1.5 inline-block">reactjs</span>
        <span className="bg-gray-600 text-gray-50 text-lg px-4 py-2 rounded-md m-1.5 inline-block">tailwindcss</span>
        <span className="bg-gray-600 text-gray-50 text-lg px-4 py-2 rounded-md m-1.5 inline-block">Sass</span>
        <span className="bg-gray-600 text-gray-50 text-lg px-4 py-2 rounded-md m-1.5 inline-block">Wordpress</span>
        <span className="bg-gray-600 text-gray-50 text-lg px-4 py-2 rounded-md m-1.5 inline-block">git</span>
        <span className="bg-gray-600 text-gray-50 text-lg px-4 py-2 rounded-md m-1.5 inline-block">Redux</span>
        <span className="bg-gray-600 text-gray-50 text-lg px-4 py-2 rounded-md m-1.5 inline-block">Firebase</span>
        </div>
        </div>
  </div>
    )
}

export default About