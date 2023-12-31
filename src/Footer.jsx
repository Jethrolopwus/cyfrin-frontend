import codeHawks from "./assets/codehawks-leaderboard.png"
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { Link } from 'react-router-dom';
import codehawksLogo from "./assets/codehawks-logo.png"
import { FiPlusCircle } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import logo from "./assets/Cyfrin.png";

const Footer = () => {
  return (
    <footer className="w-full">
        <div className='bg-black sm:mt-2 md:mx-2  mt-4 border-b-2 rounded-lg  '>
      <div className=' py-32'>
        <div className='flex items-center gap-2 mx-4  border-2 border-gray-200 rounded-3xl'>
             <div className='m-8'>
                <img src={codehawksLogo} alt=" Code Hawk logo"/>
                <h2 className='text-white text-md  md:2xl py-8'>Not sure where to go after completing our courses?</h2>
                <p className='text-white text-sm md:text-xl '>Apply your skills at the CodeHawks competitive audits platform. Hack, win prizes and shape the future of Web3!</p>
                <span className='flex items-center gap-2 text-xs md:text-base m-8 justify-center border-2 py-2  border-blue-100 text-white rounded-lg'>
                Visit CodeHawks
                <FaArrowRight  className='text-white text-sm '/>
              </span>
             </div>
            <div className='py-8 h-30 px-2 '>
            <img src={codeHawks} alt="codeHawks leading bg" />
          </div>
        </div>
        </div>
    </div>
    <div className='flex flex-wrap md:flex-nowrap mt-16'>
      <div className='m-8 w-full md:w-[45%] md:text-start'>
        <p className='text-blue-600 text-sm md:text-lg py-2'>Support</p>
        <h1 className='text-xl md:text-3xl font-bold py-3'>FAQs</h1>
        <p className=' text-md md:text-2xl text-gray-600'>Can’t find an answer? Join our Discord or follow us on Twitter.</p>
       <div className='flex flex-wrap items-center w-full justify-center md:justify-start pt-5 gap-4'>
         <span className='flex items-center  border-2 py-2 w-36 justify-center  border-blue-100 rounded-lg'>
              <FaDiscord className='' />
               <p className='text-lg px-4 text-blue-600'>Discord</p> 
            </span>
            <span className='flex items-center  w-36 justify-center  border-2 py-2 border-blue-100  rounded-lg'>
            <FiTwitter />
            <p className='text-lg px-4 text-blue-600'>Twitter</p>
            </span>
       </div>
      </div>
      <div className='m-8 p-8 w-full md:w-[45%] bg-gray-50'>
        <span className='flex items-center justify-between py-6'>How do I get access to Cyfrin Updraft?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-6 '>When will I receive my early access code?
        <FiPlusCircle />
        </span> 
        <span className='flex items-center justify-between py-6'>Why early access?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-6'>Are your courses completely free?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-6' >When do your courses start?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-6'>How long do courses take to complete?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-6'>What is Cyfrin Updraft?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-6'>What’s happened to Patrick’s courses?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-6'>I have never coded in my life, are these courses suitable for me?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-6'>What is Cyfrin Updraft?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-6'>What’s happened to Patrick’s courses?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-6'>How is Cyfrin Updraft connected to CodeHawks?
        <FiPlusCircle />
        </span>
      </div>
    </div>
    <div className="bg-black opacity-2 mt-8  rounded-xl">
  <div className="text-white pt-[12%]">
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="p-8">
        <h2 className="p-2 md:p-8 text-md md:text-xl md:text-2xl text-gray-300">Join 100,000+ students</h2>
        <p className="text-md md:text-xl text-gray-300">Stay in the loop with everything you need to know.</p>
      </div>
      <div className="flex flex-col items-center justify-between gap-4 p-8">
        <p className="p-2 border-2 text-gray-400 border-blue-200 rounded-xl text-lg md:text-2xl w-full">Enter your Email</p>
        <button className="text-lg md:text-2xl p-2 text-gray-200 font-semibold border-2 rounded-3xl bg-blue-800 w-full md:w-auto">Subscribe</button>
      </div>
    </div>
    <div className="flex flex-col items-center justify-between p-8 m-8">
      <img src={logo} alt="logo" className="p-4" />
      <p className="text-md md:text-xl text-gray-400 mb-4 text-center">We will not share your info with 3rd parties without consent.</p>
      <ul className="flex items-center text-white flex-wrap gap-4 px-4 text-xl md:text-2xl justify-center py-4">
        <li>
          <Link className="text-md md:text-xl" >Home</Link>
        </li>
        <li>
          <Link className="text-md md:text-xl">Courses</Link>
        </li>
        <li className="cursor-pointer">
          <FaDiscord />
        </li>
        <li className="cursor-pointer">
          <FaGithub />
        </li>
        <li className="cursor-pointer">
          <FiTwitter />
        </li>
      </ul>
    </div>
  </div>
</div>

    </footer>
  )
}

export default Footer