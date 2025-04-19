import { MdMenu } from "react-icons/md";
import { BiLogoPlayStore } from "react-icons/bi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdClose } from "react-icons/md";

const NavbarMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Get Started", link: "/getting-started" },
  { id: 3, title: "FAQ", link: "/faq" },
];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  console.log("Layout rendered");
  return (
    <>
    
      <div className="bg-background-990 text-text-100 py-2 z-50 fixed top-0 left-0 w-full">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="container flex justify-between items-center px-4 mx-auto"
        >
          {/* Logo Section */}
          <Link to="/"><div className="flex items-center">
            <div className="bg-primary/15 rounded-md flex justify-center items-center mr-2">
              <img src="./assets/logo.png" alt="Logo" className="h-10 w-10 " />
            </div>
            <a href="" className="text-xl font-bold">
              System App Remover
            </a>
          </div></Link>
          

          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-4">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <Link 
                    to={menu.link}
                    className="inline-block text-sm py-2 px-3"
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
              <button className="text-xl">
                <BiLogoPlayStore />
              </button>
            </ul>
          </div>

          {/* Mobile Menu Section */}
          <div className="md:hidden">
           <button onClick={toggleMenu}> <MdMenu className="text-4xl" size={24} /></button>
          </div>
          {isOpen && (
            <div className="md:hidden fixed top-0 left-0 w-full h-full pt-20 bg-background-990/80 flex justify-center items-start">
              <ul className="flex flex-col items-center gap-4">
                <button onClick={toggleMenu}>{isOpen &&  <MdClose className="text-4xl" size={24}/>}</button>
                {NavbarMenu.map((menu) => (
                  <li onClick={toggleMenu} key={menu.id}>
                    <Link 
                      to={menu.link}
                      className="inline-block text-sm py-2 px-3"
                    >
                      {menu.title}
                    </Link>
                  </li>
                ))}
                <button className="text-xl">
                  <BiLogoPlayStore />
                </button>
              </ul>
            </div>
          )}
        </motion.nav>
      </div>
      {/* <main className='overflow-x-hidden'>
      <Outlet />
      </main> */}
    </>
  );
};

export default Navbar;
