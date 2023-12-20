import { FaArrowRight } from 'react-icons/fa6';
import avatar from "./assets/avatar-10.png"
import avatar2 from "./assets/avatar-2.png"
import avatar3 from "./assets/avatar-3.png"
import avatar4 from "./assets/avatar-4.png"
import avatar5 from "./assets/avatar-5.png"


const Courses = () => {
  return (

  <div className='flex flex-col w-full h-auto relative'>
    {/* <img src={Background} alt=' courses background' className='rounded-3xl h-full w-full' /> */}
  <div className='w-full h-full rounded-3xl absolute top-0 bg-gradient-to-br -z-10 from-gray-300 via-gray-300 to-red-400 '/>
    <main>
        <div className='flex text-start md:text-center flex-col md:flex-col-1 items-center w-11/12 mx-auto'>
          <p className='text-blue-600 text-lg font-bold mt-8'>Everything you need</p>
          <h2 className='font-extrabold text-4xl font-mono mt-6 leading-snug'>Our Courses</h2>
          <p className='mt-12 text-2xl text-gray-600  mx-10'>Whether youre new to web3, a seasoned engineer, or an aspirant smart contract auditor, we have the right courses for you.</p>
        </div>
        <p className='text-center font-bold mt-12 text-2xl'>Check out our <span className='text-red-500'>Open Courses</span>!  No sign-up needed.</p>
          <div className='mt-16 flex justify-between'>
            <h2 className='text-2xl  mx-12 font-semibold'>Foundations</h2>
            <h2 className='text-gray-700 mx-16 text-xl hidden md:flex'>Start Here</h2>
          </div>
        <div className='flex w-full flex-col md:flex-row'>
              <div className='border-2 bg-white border-red-500  rounded-3xl w-11/12 mx-auto mt-16'>
                <h1 className='mx-4 text-4xl font-bold my-4 leading-snug'>Blockchain Basics</h1>
              <div className='flex flex-col md:flex-row gap-8 items-center'>
                <div className='mt-16  mx-8 max-w-md'>
                <p className=' text-2xl py-2 '>Start where you’re comfortable! .</p>
                <p className='text-2xl text-gray-600 py-2  leading-snug '>Whether you’re new to smart contract development or are a seasoned veteran, there’s something here for you.</p>
                  <div className='space-y-3'>
                    <span className='flex items-center'>
                    <img src={avatar} alt='avatar' width={40} height={20} />
                        <img src={avatar2} alt='avatar' width={40} height={20} />
                        <img src={avatar3} alt='avatar' width={40} height={20} />
                        <img src={avatar4} alt='avatar' width={40} height={20} />
                        <img src={avatar5} alt='avatar' width={40} height={20} />
                    </span>
                      <p className='text-sm px-2'>500+ users have taken this course.</p>
                  </div>
                  <span className='flex items-center gap-2 max-w-[120px] m-8 border-2 py-2 border-blue-100 px-2 rounded-lg'>
                    Get Started
                    <FaArrowRight  className='text-black-600 text-sm '/>
                  </span>
                </div>
                <div className='bg-gray-200 rounded-xl border-4 w-full mt-2 py-8 px-12 mx-8'>
                  <p className='text-3xl font-semibold py-8 '>Course Outline</p>
                  <div className='border-2 border-blue-100 px-4 rounded-full p-3 text-xl text-gray-300 font-medium  bg-blue-50'>What is web3?</div> <br />
                  <div className='border-2 border-blue-100 px-4 rounded-full p-3 text-xl text-gray-300 font-medium  bg-blue-50'>The Blockchain</div> <br />
                  <div className='border-2 border-blue-100 px-4 rounded-full p-3   text-xl text-gray-300 font-medium  bg-blue-50'>Smart Contracts</div> <br />
                  <div className='border-2 border-blue-100 px-4 rounded-full p-3   text-xl text-gray-300 font-medium  bg-blue-50'>Dfi</div>
                </div>
              </div>
              </div>
        </div>
        <p className='text-3xl mt-10 font-semibold mx-8'>The Solidity Path</p>
        <div className='flex flex-col md:flex-row justify-between mt-10 w-11/12 mx-auto'> 
        <div className='mt-8 bg-white border-2  rounded-3xl w-11/12 mx-auto '>
          <div className=''>
            <div className=''>
            <h2 className='text-3xl mt-4 font-bold mx-4 border-b border-gray-300 border-solid'>Solidity 101</h2>
            <p className='text-2xl mt-4 mx-2 '>If you’re new to writing smart contracts, start here!</p>
            <p className='text-2xl text-gray-600 mx-2'>Solidity is an object-oriented programming language for implementing smart contracts on various blockchain platforms, most notably, Ethereum.</p>
            </div>
            <div>
              <h2 className='text-2xl mt-20 font-semibold mx-4'>Get Started</h2>
              <p className='text-xl text-gray-400 mx-4'>What is Solidity?</p>
              <p className='text-xl text-gray-400 mx-4'>Best Practices</p>
              <h3 className='text-2xl mt-4 mx-2 text-gray-600'>Solidity Fundamentals</h3>
              <p className='text-xl mx-2 text-gray-500'>Simple storage</p>
              <p className='text-xl mx-2 text-gray-400'>Storage factory</p>
              <p className='text-xl mx-2 text-gray-300'>fund Me</p>
              <div className='flex items-center mt-8'>
                <span className='flex items-center '>
                    <img src={avatar} alt='avatar' width={40} height={20} />
                    <img src={avatar2} alt='avatar' width={40} height={20} />
                    <img src={avatar3} alt='avatar' width={40} height={20} />
                    <img src={avatar4} alt='avatar' width={40} height={20} />
                    <img src={avatar5} alt='avatar' width={40} height={20} />
                </span>
                <p className='text-xs  mt-20 w-full'>500+ users have taken this course.</p>
                <span className='flex items-center text-sm m-8 w-[250px] py-2  border-2 border-blue-100 rounded-lg '>
                  Get Started
                <FaArrowRight  className='text-black-600 text-sm '/>
              </span>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-8 w-11/12 mx-auto'>
          <div className=' bg-white mx-8 g-white border-2 rounded-3xl  '>
          <h2 className='text-3xl mt-4 mx-4 font-semibold  border-b border-gray-300 border-solid'>Foundry 101</h2>
          <p className='text-2xl mx-4 mt-8 '>Already know Solidity? Your next step is Foundry! </p>
          <p className='text-gray-500 text-2xl mx-4'> Learn how to manage your dependencies, compile your project, run tests, deploy, and interact with your from the command-line and via Solidity scripts.</p>
          <span className='flex items-center gap-2 max-w-[120px] m-8 border-2 py-2 border-blue-100 px-2 rounded-lg'>
              Get Started
              <FaArrowRight  className='text-black-600 text-sm '/>

            </span>
          </div>
          <div className=' bg-white mx-8 g-white border-2 rounded-3xl mt-8  '>
          <h2 className='text-3xl mt-4 mx-4 font-semibold  border-b border-gray-300 border-solid'>Advanced Foundry</h2>
          <p className='text-2xl mx-4 mt-8 '>Become a Foundry expert! </p>
          <p className='text-gray-500 text-2xl mx-4'> Learn advanced techniques to develop, deploy, test, optimise and interact with your smart contract using industry standard tools used by the top smart contracts engineers in web3</p>
          <span className='flex items-center gap-2 max-w-[120px] m-8 border-2 py-2 border-blue-100 px-2 rounded-lg'>
              Get Started
              <FaArrowRight  className='text-black-600 text-sm '/>
            </span>
          </div>
        </div>
        </div>
        <h2 className='text-3xl font-bold mx-4 mt-8'>Security and Auditing</h2>
        <div className='border-4 border-blue-800 border-solid rounded-3xl mx-8 mt-8'>
          <div>
            <span className='flex items-center text-red-300 bg-blue  gap-2 m-8 border-2 border-red-300 border-solid p-2 rounded-lg w-44'>
              <FaArrowRight  className='text-red-400 text-sm '/>
              Open Courses
            </span>
            <h2 className='text-3xl font-bold mx-4'>Security & Auditing</h2>
          
          </div>
          <div>

          </div>
          <div className='flex flex-col md:flex-row mt-36'>
            <div className='mt-8 mx-4 max-w-md'>
              <p className='text-2xl mt-4 '>Start your career as a smart contract auditor!</p>
              <p className='text-2xl text-gray-600'> Learn the best practices for writing secure and optimized smart contracts. Explore techniques like fuzzing, invariant testing, formal verification, and more to identify bugs and protect web3 protocols.</p>
              <span className='flex items-center gap-2 m-8 w-36 border-2 py-2 border-blue-100 rounded-lg'>
              Watch Courses
              <FaArrowRight  className='text-black-600 text-sm '/>
            </span>
            </div>
            <div className='bg-gray-200 rounded-xl border-4 w-full mt-2 py-8 px-12 mx-8'>
            <p className='text-3xl font-semibold py-8 '>Course Outline</p>
            <div className='border-2 border-blue-100 px-4 rounded-full p-3 text-xl text-gray-300 font-medium  bg-blue-50'>What is smart contract audit?</div> <br/>
            <div className='border-2 border-blue-100 px-4 rounded-full p-3 text-xl text-gray-300 font-medium  bg-blue-50'>Your First Audit</div> <br />
            <div className='border-2 border-blue-100 px-4 rounded-full p-3   text-xl text-gray-300 font-medium  bg-blue-50'>Manual and static analysis</div> <br/>
            <div className='border-2 border-blue-100 px-4 rounded-full p-3   text-xl text-gray-300 font-medium  bg-blue-50'> Invariant and intro to Dfi</div>
          </div>
          </div>
        </div>
    </main>
    
  </div>
   
  )
}

export default Courses