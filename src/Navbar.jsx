import{ useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';
import cyfrin from "./assets/Cyfrin.png"

const Navbar = ({scrollToSection}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const scroll = (id) => {
    scrollToSection(id)
    setIsMenuOpen(false)
  }

  return (
    <nav className='fixed left-0 top-0 w-full bg-gray-100 border-b-2 px-4 py-4 z-10'>
      <div className="flex justify-between items-center w-full ">
            <div className='flex  items-center gap-4'>
              <img src={cyfrin} alt="nav-logo" />
              {/* <h3 className="text-2xl font-medium text-gray-600 px-8"></h3> */}
            </div>

            <ul className="hidden md:flex items-center gap-2">
              <li className="border-1 rounded-lg py-2 px-4 ml-64 text-center cursor-pointer  text-gray-600 font-semibold">
                <p  onClick={(e) => scroll("home", e )}>Home</p>
              </li>
              <li className="border-1 rounded-lg  text-center text-md font-semibold cursor-pointer text-gray-600">
                <p  onClick={(e) => scroll("courses", e )}>Courses</p>
              </li>
            </ul>
            <div className='hidden md:flex gap-2'>
              <button className="border-2 text-gray-600 text-center text-md rounded-xl py-2 px-4 font-semibold bg-gray-100">Signin</button>
              <button className="border-1 bg-blue-600 hover:bg-blue-900  text-white text-center text-md  rounded-xl px-4 py-2 font-semibold">Login</button>
            </div>
            <div className='block md:hidden cursor-pointer relative'>
              <FaBars onClick={handleToggleMenu} />
              <div className={` ${isMenuOpen ? 'flex flex-col  absolute top-14 right-0 bg-slate-300 rounded-2xl gap-2' : 'hidden '}`}>
                <p className='font-semibold m-2' onClick={(e) => scroll("home", e )}>Home</p>
                <p className='font-semibold' onClick={(e) => scroll("courses", e )}>Courses</p> 
                <button className="border-2 text-gray-600 text-center text-md rounded-xl py-2 px-4 font-semibold bg-gray-100">Signin</button>
                <button className="border-1 bg-blue-600 hover:bg-blue-900  text-white text-center text-md  rounded-xl px-4 py-2 font-semibold">Login</button>
              </div>
            </div>
      </div>
    </nav>
  );
};

export default Navbar;
