import { FaArrowRight } from 'react-icons/fa6';
import avatar from "./assets/avatar-10.png"
import avatar2 from "./assets/avatar-2.png"
import avatar3 from "./assets/avatar-3.png"
import avatar4 from "./assets/avatar-4.png"
import avatar5 from "./assets/avatar-5.png"


const Courses = () => {
  return (

  <div className='flex flex-col w-full h-auto relative'>
   
  <div className='w-full h-full mt-8 rounded-3xl absolute top-0 bg-gradient-to-br -z-10 from-gray-300 via-gray-300 to-red-400 '/>
    <main>
        <div className='flex text-start md:text-center flex-col md:flex-col-1 items-center w-11/12 mx-auto'>
          <p className='text-blue-600 text-sm md:text-lg xl:text-lg font-bold mt-12'>Everything you need</p>
          <h2 className='font-extrabold text-xl md:text-2xl xl:text-3xl font-mono mt-6 leading-snug'>Our Courses</h2>
          <p className='mt-12 text-md md:text-xl xl:text-2xl text-gray-600  mx-10'>Whether youre new to web3, a seasoned engineer, or an aspirant smart contract auditor, we have the right courses for you.</p>
        </div>
        <p className='text-center font-bold mt-12 text-lg md:text-xl xl:text-2xl'>Check out our <span className='text-red-500'>Open Courses</span>!  No sign-up needed.</p>
          <div className='mt-16 flex justify-between'>
            <h2 className='text-sm md:text-xl xl:text-2xl  mx-12 font-semibold'>Foundations</h2>
            <h2 className='text-gray-700 mx-16 text-xl md:text-2xl hidden md:flex'>Start Here</h2>
          </div>
        <div className='flex w-full flex-col md:flex-row'>
              <div className='border-2 bg-white border-red-500  rounded-3xl w-11/12 mx-auto mt-16'>
                <h1 className='mx-4 text-xl md:text-2xl xl:text-3xl font-bold my-4 leading-snug'>Blockchain Basics</h1>
              <div className='flex flex-col md:flex-row gap-8 items-center'>
                <div className='mt-16 m-4 max-w-md'>
                <p className=' text-lg md:text-xl py-2 '>Start where you’re comfortable! .</p>
                <p className='text-sm md:text-xl  text-gray-600 py-2 leading-snug '>Whether you’re new to smart contract development or are a seasoned veteran, there’s something here for you.</p>
                  <div className='space-y-3'>
                    <span className='flex items-center'>
                    <img src={avatar} alt='avatar' width={40} height={20} />
                        <img src={avatar2} alt='avatar' width={40} height={20} />
                        <img src={avatar3} alt='avatar' width={40} height={20} />
                        <img src={avatar4} alt='avatar' width={40} height={20} />
                        <img src={avatar5} alt='avatar' width={40} height={20} />
                    </span>
                      <p className='text-xs md:text-sm px-2'>500+ users have taken this course.</p>
                  </div>
                  <span className='flex items-center gap-2 w-44  md:m-4 sm:p-4 m-8 border-2 p-2 border-blue-100 text-sm md:text-xl  rounded-lg'>
                    Get Started
                    <FaArrowRight  className='text-black-600 text-sm '/>
                  </span>
                </div>
                <div className='bg-gray-200 rounded-xl border-4 w-full mt-2 py-8 px-12 mx-8'>
                  <p className='text-xl md:text-2xl font-semibold py-8 '>Course Outline</p>
                  <div className='border-2 border-blue-100 px-4 rounded-full p-1 md:p-3  md:text-sm text-sm xl:text-xl text-gray-300 font-medium  bg-blue-50'>What is web3?</div> <br />
                  <div className='border-2 border-blue-100 px-4 rounded-full p-1 md:p-3  text-sm md:text-xl text-gray-300 font-medium  bg-blue-50'>The Blockchain</div> <br />
                  <div className='border-2 border-blue-100 px-4 rounded-full p-1 md:p-3  md:text-sm text-sm xl:text-xl text-gray-300 font-medium  bg-blue-50'>Smart Contracts</div> <br />
                  <div className='border-2 border-blue-100 px-4 rounded-full p-1 md:p-3  md:text-sm text-sm xl:text-xl text-gray-300 font-medium  bg-blue-50'>Dfi</div>
                </div>
              </div>
              </div>
        </div>
        <p className='text-xl md:text-2xl mt-10 font-semibold mx-8'>The Solidity Path</p>
        <div className='flex flex-col md:flex-row justify-between mt-10 w-11/12 mx-auto'> 
        <div className='mt-8 bg-white border-2  rounded-3xl w-11/12 mx-auto '>
          <div className=''>
            <div className=''>
            <h2 className='text-xl md:texl-2xl xl:text-2xl mt-4 font-bold mx-4 border-b border-gray-300 border-solid'>Solidity 101</h2>
            <p className='text-md md:text-xl my-4 mx-2 '>If you’re new to writing smart contracts, start here!</p>
            <p className='text-md  md:text-xl text-gray-600 mx-2'>Solidity is an object-oriented programming language for implementing smart contracts on various blockchain platforms, most notably, Ethereum.</p>
            </div>
            <div>
              <h2 className='text-xl md:text-2xl mt-20 font-semibold '>Get Started</h2>
              <p className='text-md md:text-xl text-gray-400 mx-4'>What is Solidity?</p>
              <p className='text-md md:text-xl text-gray-400 mx-4'>Best Practices</p>
              <h3 className='text-md md:text-xl mt-4 mx-2 text-gray-600'>Solidity Fundamentals</h3>
              <p className='text-md md:text-xl mx-2 text-gray-500'>Simple storage</p>
              <p className='text-md md:text-xl mx-2 text-gray-400'>Storage factory</p>
              <p className='text-md md:text-xl mx-2 text-gray-300'>fund Me</p>
              <div className='flex items-center mt-8 '>
                <span className='flex items-center '>
                    <img src={avatar} alt='avatar' width={40} height={20} />
                    <img src={avatar2} alt='avatar' width={40} height={20} />
                    <img src={avatar3} alt='avatar' width={40} height={20} />
                    <img src={avatar4} alt='avatar' width={40} height={20} />
                    <img src={avatar5} alt='avatar' width={40} height={20} />
                </span>
              </div>
               <p className='text-xs md:text-base  mt-4 '>500+ users have taken this course.</p>
                    <span className='flex items-center text-sm md:text-base m-4 w-32 md:m-4 sm:p-4 py-2  border-2 border-blue-100 rounded-lg '>
                      Get Started
                    <FaArrowRight  className='text-black-600 text-sm '/>
                      </span>
            </div>
          </div>
        </div>
        <div className='mt-8 mx-auto '>
          <div className=' bg-white mx-2 g-white border-2 rounded-3xl '>
          <h2 className='text-xl md:texl-2xl xl:text-2xl mt-4 mx-4 font-semibold  border-b border-gray-300 border-solid'>Foundry 101</h2>
          <p className='text-md md:text-xl mx-4 mt-8 '>Already know Solidity? Your next step is Foundry! </p>
          <p className='text-gray-500 text-md  md:text-xl mx-4'> Learn how to manage your dependencies, compile your project, run tests, deploy, and interact with your from the command-line and via Solidity scripts.</p>
          <span className='flex items-center gap-2 text-sm md:text-base  w-32 m-8 border-2 py-2 border-blue-100 px-2 rounded-lg'>
              Get Started
              <FaArrowRight  className='text-black-600 text-sm '/>

            </span>
          </div>
          <div className=' bg-white mx-2 border-2 rounded-3xl mt-8  '>
          <h2 className='text-xl md:texl-2xl xl:text-2xl mt-4 mx-4 font-semibold  border-b border-gray-300 border-solid'>Advanced Foundry</h2>
          <p className='text-md md:text-xl mx-4 mt-8 '>Become a Foundry expert! </p>
          <p className='text-gray-500 text-md md:text-xlmx-4'> Learn advanced techniques to develop, deploy, test, optimise and interact with your smart contract using industry standard tools used by the top smart contracts engineers in web3</p>
          <span className='flex items-center gap-2 w-32 text-sm md:text-base m-8 border-2 py-2 border-blue-100 px-2 rounded-lg'>
              Get Started
              <FaArrowRight  className='text-black-600 text-sm '/>
            </span>
          </div>
        </div>
        </div>
        <h2 className='text-xl md:text-2xl  font-bold mx-4 mt-8'>Security and Auditing</h2>
        <div className='border-4 border-blue-800 border-solid rounded-3xl mx-8 my-12'>
          <div>
            <span className='flex items-center text-red-300 bg-blue text-xs xl:w-44  gap-2 m-8  border-2 border-red-300 border-solid p-2 rounded-lg '>
              <FaArrowRight  className='text-red-400 text-sm '/>
              Open Courses
            </span>
            <h2 className='text-xl md:texl-2xl xl:text-2xl font-bold mx-4'>Security & Auditing</h2>
      
          </div>
          <div className='flex flex-col md:flex-row '>
            <div className='mt-8 mx-4 max-w-md'>
              <p className='text-xl md:texl-2xl xl:text-2xl mt-4 '>Start your career as a smart contract auditor!</p>
              <p className='text-xl md:texl-2xl xl:text-2xl text-gray-600'> Learn the best practices for writing secure and optimized smart contracts. Explore techniques like fuzzing, invariant testing, formal verification, and more to identify bugs and protect web3 protocols.</p>
              <span className='flex items-center gap-2 m-4 w-36 text-sm md:text-base border-2 py-2 border-blue-100 rounded-lg'>
              Watch Courses
              <FaArrowRight  className='text-black-600 text-sm '/>
            </span>
            </div>
            <div className='bg-gray-200 rounded-xl border-4 w-full  mt-2 py-8 px-4 lg:px-12 '>
              <p className='text-3xl font-semibold py-8 '>Course Outline</p>
              <div className='grid grid-cols-1 gap-2'>
              <div className='border-2 border-blue-100 md:px-4 rounded-full p-1 md:p-3 text-sm md:text-xl text-gray-300 font-medium  bg-blue-50'>What is smart contract audit?</div> 
              <div className='border-2 border-blue-100 md:px-4 rounded-full p-1 md:p-3 text-sm md:text-xl text-gray-300 font-medium  bg-blue-50'>Manual and static analysis</div> 
              <div className='border-2 border-blue-100 md:px-4 rounded-full p-1 md:p-3  text-md md:text-xl text-gray-300 font-medium  bg-blue-50'> Invariant and intro to Dfi</div>
              </div>
          </div>
          </div>
        </div>
    </main>
    
  </div>
   
  )
}

export default Courses