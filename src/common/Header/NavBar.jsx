import { useState } from "react";
import { Link } from "react-router-dom"
import Panel from "../panel/Panel";

const NavBar = () => {

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };


  return (
    <>

      {/* // <div className="py-5 flex justify-start">
        // <Link><img src="https://cdn-images-1.medium.com/v2/resize:fit:1200/1*v5SYqjYEdQMPIwNduRrnCw.png" className="h-10"/></Link>
        // <Link to={"/"} className="mx-3">hello</Link>
        // <Link to={"/restaurant"} className="mx-3">Restaurant</Link>
        // <Link to={"/about"} className="mx-3">About</Link>
        // </div>

// className="bg-white border-gray-200 dark:bg-gray-900"  */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900 px-6">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link className="flex items-center">
            <img src="https://cdn-images-1.medium.com/v2/resize:fit:1200/1*v5SYqjYEdQMPIwNduRrnCw.png" className="h-10 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MENOUNA FOOD</span>
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="">
                <Link to={"/home"} className=" hover:text-sky-300 transition-all block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-yellow-50" >Home</Link>
              </li>

              <li>
                <Link to={"/restaurant"} className=" hover:text-sky-300 transition-all block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-yellow-50" >Restaurant</Link>
              </li>

              <li>
                <Link to={"/about"} className="hover:text-sky-300 transition-all block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-yellow-50" >About</Link>
              </li>

              <li>
                <span onClick={()=>handleClick()} to={"/about"} className="hover:text-sky-300 transition-all block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-yellow-50" >Cart [0]</span>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <div className={isVisible ? 'visible' : 'invisible'}>
        <Panel />
      </div>
    </>
  )
}

export default NavBar;