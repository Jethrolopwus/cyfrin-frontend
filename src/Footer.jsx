import codeHawks from "./assets/codehawks-leaderboard.png"
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { Link } from 'react-router-dom';
import codehawksLogo from "./assets/codehawks-logo.png"
import { FiPlusCircle } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
        <div className='bg-black sm:mt-2 md:mx-2  mt-4 border-b-2 rounded-lg'>
      <div className=' py-32'>
        <div className='flex items-center gap-2 mx-4  border-2 border-gray-200 rounded-3xl'>
             <div className='m-8'>
             <img src={codehawksLogo} alt=" Code Hawk logo"/>
              <h2 className='text-white text-2xl sm:text-xl md:2xl py-8'>Not sure where to go after completing our courses?</h2>
              <p className='text-white'>Apply your skills at the CodeHawks competitive audits platform. Hack, win prizes and shape the future of Web3!</p>
              <span className='flex items-center gap-2 m-8 justify-center border-2 py-2  border-blue-100 text-white rounded-lg'>
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
    <div className='flex items-center'>
      <div className='m-8'>
        <p className='text-blue-600 py-4'>Support</p>
        <h1 className='text-3xl font-bold py-8'>FAQs</h1>
        <p className='text-2xl text-gray-600'>Can’t find an answer? Join our Discord or follow us on Twitter.</p>
       <div className='flex items-center justify-around m-8'>
         <span className='flex items-center  border-2 py-2 w-36 justify-center  border-blue-100 rounded-lg'>
              <FaDiscord className='' />
               <p className='text-lg px-4'>Discord</p> 
            </span>
            <span className='flex items-center  w-36 justify-center  border-2 py-2 border-blue-100  rounded-lg'>
            <FiTwitter />
            <p className='text-lg px-4'>Twitter</p>
            </span>
       </div>
      </div>
      <div className='m-8 p-8'>
        <span className='flex items-center justify-between p-4'>How do I get access to Cyfrin Updraft?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-4'>When will I receive my early access code?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-4'>Why early access?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-4'>Are your courses completely free?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-4' >When do your courses start?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-4'>How long do courses take to complete?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-4'>Do I get any certifications for completing the Cyfrin Updraft courses?
        <FiPlusCircle />
        </span>
        <span nonce='flex  justify-between py-4'>I have never coded in my life, are these courses suitable for me?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-4'>What is Cyfrin Updraft?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-4'>What’s happened to Patrick’s courses?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-4'>I have never coded in my life, are these courses suitable for me?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-4'>What is Cyfrin Updraft?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-4'>What’s happened to Patrick’s courses?
        <FiPlusCircle />
        </span>
        <span className='flex items-center justify-between py-4'>How is Cyfrin Updraft connected to CodeHawks?
        <FiPlusCircle />
        </span>
      </div>
    </div>
    <div className="bg-black opacity-2 mt-8  rounded-xl">
      <div className='text-white '>
        <h2 className="p-8 text-xl text-gray-300">Join 100,000+ students</h2>
        <p className="text-xl text-gray-300">Stay in the loop with everything you need to know.</p>
        <div>
        <span className='flex w-44 items-center gap-2 m-8 justify-center  border-2 py-2 border-blue-100 text-white rounded-lg'>
              Visit CodeHawks
              <FaArrowRight  className='text-white text-sm '/>
          </span>
          <div className="flex items-center justify-center   gap-4 p-8">
            <p className="p-2 border-2 text-gray-400 border-blue-200  rounded-xl text-2xl ">Enter your Email</p>
            <button className="text-xl p-4 text-gray-200 font-semibold ">Subscribe</button>
          </div>
          <p className="text-xl text-gray-400 ">We will not share your info with 3rd parties without consent.</p>

        </div>
      </div>
      <div className='text-white px-8 '>
        <ul className='flex items-center flex-wrap gap-4 px-4 text-xl justify-end py-4'>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Courses</Link>
          </li>
          <li>
          <FaDiscord />
          </li>
          <li>
          <FaGithub />
          </li>
          <li>
          <FiTwitter />
          </li>
          
        </ul>
      </div>
    </div>
    </footer>
  )
}

export default Footer