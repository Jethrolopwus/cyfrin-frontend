import { FaArrowRight } from "react-icons/fa";
import avatar from "./assets/avatar.png"
import avatar2 from "./assets/avatar-2.png"
import avatar3 from "./assets/avatar-3.png"
import avatar4 from "./assets/avatar-4.png"
import avatar5 from "./assets/avatar-5.png"
import avatar6 from "./assets/avatar-6.png"
import avatar7 from "./assets/avatar-7.png"
import avatar8 from "./assets/avatar-8.png"
import avatar9 from "./assets/avatar-9.png";
// import background from "./assets/hero-background.png"
import lesson from "./assets/lesson-hero.jpg"
import Access from "./assets/accessible.png"
import start from "./assets/start-when.png"
import industry from "./assets/battle-tested.png"
import avatarcdb from "./assets/avatars.cdb.png"
import codesnipet from "./assets/code-snippet.png"
import group from "./assets/avatar-1.27.png"
import group2 from "./assets/avatar-10.png"
import group3 from "./assets/avatar-3.png"
import group4 from "./assets/avatar-5.png"
import group5 from "./assets/avatar-7.png"
import  Carousel  from "./Carousel";
import Courses from './Courses';
import Navbar from './Navbar';
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Home = () => {
  return ( 
      <main className='w-full'>
        <Navbar/>
        <div className='mt-32 w-full flex flex-col items-center '>
              
              <div className='flex items-center justify-center  '>
                  <div className='flex items-center border-2 border-blue-100 p-1 text-sm text-gray-600 font-medium  bg-blue-50 rounded-full gap-2'>
                    <div className='border-2 border-blue-100 px-2 rounded-full'>New courses!</div>
                    <span className='flex items-center gap-1 pr-1'> <span>Smart contract security and auditing</span>
                    <FaArrowRight  className='text-blue-600 text-xs'/>
                    </span> 
                  </div>
              </div>
          <div className="flex flex-col text-2xl sm:text-center  items-center mt-8 ">
                <h2 className=' text-2xl sm:text-lg md:text-3xl xl:text-6xl text-center font-semibold  my-8  leading-snug'>Teaching the <span className='border-b-4  border-black border-solid '>next generation</span>  of smart <span className=''>contract developers.</span> </h2>
                <p className='text-gray-400  sm:text-3xl md:text-2xl text-md mx-2  '>Learn from industry-leading experts how to build the next generation of web3 <span>applications and kickstart your career.</span> </p>
                <button className='border-1 bg-blue-600 hover:bg-blue-900 text-white font-bold text-md mt-10 rounded-lg p-4'>Apply for early access</button>
          </div>

          <section className='w-full'>
              <div className='flex flex-col  items-center my-10 '>
                  <div className='text-md text-gray-400 mt-8 '>
                    <p className=''>Over 100,000+ students taught</p>
                    <span className='flex items-center mt-8 flex-wrap'>
                      <img src={avatar} alt='avatar' width={40} height={20} />
                      <img src={avatar2} alt='avatar' width={40} height={20} />
                      <img src={avatar3} alt='avatar' width={40} height={20} />
                      <img src={avatar4} alt='avatar' width={40} height={20} />
                      <img src={avatar5} alt='avatar' width={40} height={20} />
                      <img src={avatar6} alt='avatar' width={40} height={20} />
                      <img src={avatar7} alt='avatar' width={40} height={20} />
                      <img src={avatar8} alt='avatar' width={40} height={20} />
                      <img src={avatar9} alt='avatar' width={40} height={20} />
                    </span>
                  </div>
                  <div className='my-10 relative bg-[url(`./src/Components/images/hero-background.png`)]'>
                  {/* <img  src={background} alt='section background color' className='h-screen w-full rounded-3xl' /> */}
                  <div className='absolute left-0 mt-36 mx-9'>
                    <img className='h-screen' src={lesson} alt='Hero-background'  />
                  </div>
                  </div>
              </div>
              <div>
                < Carousel />
            </div>  
            
            <div>
              <div className='flex flex-col items-center '>
              <span className='text-blue-600 font-semibold '>Why us </span>
              <h1 className='text-3xl font-semibold '>From Beginner to Expert</h1>
              <p className='my-4 text-gray-400 text-lg font-bold max-w-2xl'>Start your Web3 journey with our beginner-friendly resources and step-by-step guidance taught by the industry’s leading experts.</p>
              </div>
              <div className=' flex mx-auto gap-4  max-w-5xl my-4 flex-wrap'>
                <div className='border-2 shadow-3xl rounded-2xl hover:scale-110 transform transition-transform duration-[1s] w-full sm:w-1/2 md:w-1/3 lg:w-[30%] '>
                  <img src={Access} alt='access' width={300} height={100} />
                  <div className='items-center my-12'>
                    <h2 className='font-semibold text-3xl text-center'>Accessible</h2>
                  <p className='text-md font-semibold text-gray-600 text-center my-2'>Education should be accessible by everyone. This is why our courses are open and free from any charge</p>
                  </div>
                </div>
                <div className='border-2 shadow-2xl rounded-3xl hover:scale-110 transform transition-transform duration-[1s] w-full sm:w-1/2 md:w-1/3 lg:w-[30%]'>
                    <img  src={industry} alt='industry'width={300} height={100} />
                  <div className='items-center my-8'>
                  <h2 className='font-semibold text-3xl text-center'>Industry Leading</h2>
                  <p className='text-sm font-semibold text-gray-600 text-center my-2'>Our courses are created by world-recognized experts to offer you the highest level of education in web3.</p>
                  </div>
                </div>
                <div className='border-2 shadow-2xl rounded-2xl hover:scale-110 transform transition-transform duration-[1s] w-full sm:w-1/2 md:w-1/3 lg:w-[30%] '>
                  <img src={start} alt='when to start'width={300} height={100} />
                  <div className=' items-center mb-12'>
                    <h2 className='font-semibold text-3xl text-center '>Start when you want</h2>
                    <p className='text-sm font-semibold text-gray-600 text-center '>Study full time, part time, and anywhere in between.</p>
                  </div>
                  </div>
              </div>
            </div>
          </section>
          <section className='w-full'>
            <div className='mt-8  flex gap-4 flex-wrap w-full'>
              <div className=' border-2 px-8  mt-4 shadow-2xl rounded-xl mx-auto md:w-[45%] w-11/12'>
                <img src={avatarcdb} alt='avatar for the courses' width={1000} height={100} />
                <div className='flex flex-wrap my-8 w-full'>
                <img src={group} alt='groups of avatar' width={50} />
                <img src={group2} alt='groups of avatar' width={50} />
                <img src={group3} alt='groups of avatar' width={50} />
                <img src={group4} alt='groups of avatar' width={50} />
                <img src={group5} alt='groups of avatar' width={50} />
                </div>
                    <h2 className='text-3xl text-center text-gray-600 font-semibold my-4'>Over 100,000 Students Taught</h2> 
                    <p className='text-gray-600 text-center '> Join a community of students in Web3.</p>
              </div>
              <div className='border-2 px-8 mt-4 rounded-xl md:ml-4 shadow-2xl mx-auto md:w-[45%] w-11/12' >
                <img src={codesnipet} alt='codeSnipet for the courses' width={400} height={100} />
                <h2 className='text-3xl text-center text-gray-600 font-semibold'>Build real life projects</h2>
                <p className='text-gray-600 text-center'>Create your web3 portfolio and apply your knowledge to real-world use cases. Build a portfolio with dozens of projects to bring your career to the next level.</p>
              </div>
            </div>
          </section>
          <Courses/>
          <Testimonials />
          <Footer />
        </div> 
      </main>
  )
}

export default Home