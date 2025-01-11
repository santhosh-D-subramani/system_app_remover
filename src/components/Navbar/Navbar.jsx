import { MdMenu } from "react-icons/md";
import { BiLogoPlayStore } from "react-icons/bi";
import {motion} from "framer-motion";


const NavbarMenu = [
  { id: 1, title: "Home", link: "#" },
  { id: 2, title: "Get Started", link: "#" },
  { id: 3, title: "FAQ", link: "#" },
  { id: 4, title: "Guides", link: "#" },
  { id: 5, title: "Links", link: "#" },
];

const Navbar = () => {
  return (
    <>
    <div className="bg-background text-white py-2 z-50 fixed top-0 left-0 w-full">
    <motion.nav 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 1,delay: 0.5}}

    className="container flex justify-around items-center">
      {/* Logo Section */}
      <div className="text-xl font-bold flex items-center">

        <div className="bg-primary/30  rounded-md flex justify-center items-center mr-2">
        <img src="./src/assets/logo.png" alt="Logo" className="h-10 w-10" />
        </div>
        <a href="#">System App Remover</a>
      </div>
      {/* Menu Section */}
      <div className="hidden md:block">
        <ul className="flex items-center gap-4">
          {NavbarMenu.map((menu) => (
            <li key={menu.id}>
              <a href={menu.link} className="inline-block text-sm py-2 px-3">{menu.title}</a>
            </li>
          ))}
          <button className=" text-xl "><BiLogoPlayStore/></button>
        </ul>
      </div>
      {/* Mobile Menu Section */}
      <div className="md:hidden">
        <MdMenu className="text-4xl " size={24} />
      </div>
    </motion.nav>
    </div>
    </>
  );
};

export default Navbar;
