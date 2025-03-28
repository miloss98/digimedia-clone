import Image from "next/image";
import { X, Menu } from "react-feather";
import Link from "next/link";
import logo from "/public/logo.png";

const Header = ({ isOpen, setIsOpen }: any) => {
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <header className="sticky top-0 bg-white flex flex-row justify-between items-center h-20 px-4 shadow-md md:px-10 md:h-24 lg:px-20 z-[999]">
      <div>
        <Image src={logo} alt="digimedia_logo" width={150} height={50} />
      </div>
      <nav>
        <div className="hidden md:flex md:justify-center md:items-center md:gap-5 lg:gap-10">
          <Link href="#home" onClick={handleClose} className="hover:text-pink">
            Home
          </Link>
          <Link href="#about" onClick={handleClose} className="hover:text-pink">
            About
          </Link>
          <Link href="#services" className="hover:text-pink">
            Services
          </Link>
          <Link href="#projects" className="hover:text-pink">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-pink">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          {isOpen ? (
            <X
              className="hover:cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <Menu
              className="hover:cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
