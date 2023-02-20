import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import { X, Menu } from "react-feather";

const Header = ({ isOpen, setIsOpen }: any) => {
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <header className='flex flex-row justify-between items-center h-20 px-4 shadow-md md:px-10 md:h-24 lg:px-20'>
      <div>
        <Image src={logo} alt='digimedia_logo' />
      </div>
      <nav>
        <div className='hidden md:flex md:justify-center md:items-center md:gap-5 lg:gap-10'>
          <a href='#home' onClick={handleClose} className='hover:text-pink'>
            Home
          </a>
          <a href='#about' onClick={handleClose} className='hover:text-pink'>
            About
          </a>
          <a href='#services' className='hover:text-pink'>
            Services
          </a>
          <a href='#projects' className='hover:text-pink'>
            Projects
          </a>
          <a href='#contact' className='hover:text-pink'>
            Contact
          </a>
        </div>
        <div className='md:hidden'>
          {isOpen ? (
            <X
              className='hover:cursor-pointer'
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <Menu
              className='hover:cursor-pointer'
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
