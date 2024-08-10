import { db } from "../firebase.js"
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Contact = () => {

  const colRef = collection(db, "messages");


function handleSubmit(e){
    e.preventDefault();
    addDoc(colRef, {
      from: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      sentAt: serverTimestamp()
    });
    e.target.reset();
    alert("Your message has been sent, Thank you for reaching out!")
}

  return (
    <div id="contact" className="py-3 w-screen pb-5">
    <h1 className="ml-10 font-bold text-3xl text-white ">Get in touch</h1>
    <form onSubmit={handleSubmit} name="message" className="w-4/5 max-w-xl mx-auto flex flex-col items-center justify-evenly px-4 sm:px-10 pb-5 mt-10 rounded-lg bg-slate-800 ">
      <label htmlFor="name" className="my-4 flex flex-col pl-0 text-gray-400 text-lg font-bold w-full"><span className="font-display">Name</span>
      <input name="name" type="text" id="name" required placeholder="Enter your name" className="border-none font-mono outline-none font-semibold p-3 text-xl text-black focus:text-white focus:bg-sky-800 w-full"/></label>
      
      <label htmlFor="email" className="my-4 flex flex-col pl-0 text-gray-400 text-lg font-bold w-full"><span className="font-display">email</span>
      <input name="email" type="email" id="email" required placeholder="Enter your email" className="border-none font-sans outline-none p-3 font-semibold text-xl text-black focus:text-white focus:bg-sky-800 w-full"/></label>
      <label htmlFor="message" className="p-0 my-4 flex flex-col text-gray-400 text-lg font-bold w-full"><span className="font-display">Message</span>
      <textarea rows="10" name="message" id="message" placeholder="Message" required className="border-none outline-none font-sans font-semibold p-3 text-xl text-black focus:text-white focus:bg-sky-800 w-full"></textarea></label>
      <button type="submit" className="w-full sm:w-1/3 font-display text-xl bg-white text-sky-800 hover:bg-sky-800 hover:text-white duration-100 px-4 py-2 rounded-sm flex-1 relative mr-auto font-black mt-4">Send</button>
      
    </form>
    <div className="w-4/5 max-w-xl mx-auto text-gray-500 mt-5">
      <p>Based in</p>
      <p>Beni Mellal, Morocco</p>
      <p className='mt-4'>My phone number</p>
      <p className='font-semibold select-all'>+212 699839135</p>
      <p className='mt-4'>My e-mail</p>
      <p className='font-semibold select-all'>aminefathi10@gmail.com</p>
    </div>
  </div>
  )
}

export default Contact


