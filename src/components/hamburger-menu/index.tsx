import Link from "next/link";

const HamburgerMenu = ({ isOpen, setIsOpen }: any) => {
  return (
    <>
      {isOpen && (
        <section className="sticky top-20 flex justify-center items-center w-full md:hidden">
          <div className="flex flex-col justify-center items-center my-0 w-full border-lightGray bg-white shadow shadow-lg">
            <div className="flex justify-center items-center w-full h-10 border-lightGray border-b">
              <Link
                href="#home"
                onClick={() => setIsOpen(false)}
                className="hover:text-pink"
              >
                Home
              </Link>
            </div>
            <div
              onClick={() => setIsOpen(false)}
              className="flex justify-center items-center w-full h-10 border-lightGray border-b"
            >
              <Link href="#about" className="hover:text-pink">
                About
              </Link>
            </div>
            <div
              onClick={() => setIsOpen(false)}
              className="flex justify-center items-center w-full h-10 border-lightGray border-b"
            >
              <Link href="#services" className="hover:text-pink">
                Services
              </Link>
            </div>
            <div className="flex justify-center items-center w-full h-10 border-lightGray border-b">
              <Link
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="hover:text-pink"
              >
                Projects
              </Link>
            </div>
            <div className="flex justify-center items-center w-full h-10 border-lightGray border-b">
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-pink"
              >
                Contact
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default HamburgerMenu;
