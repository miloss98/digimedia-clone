const HamburgerMenu = ({ isOpen }: any) => {
  return (
    <>
      {isOpen && (
        <section className='absolute flex justify-center items-center w-full md:hidden'>
          <div className='flex flex-col justify-center items-center my-1 w-full border-lightGray bg-white shadow shadow-lg'>
            <div className='flex justify-center items-center w-full h-10 border-lightGray border-b'>
              <a href='#home' className='hover:text-pink'>
                Home
              </a>
            </div>
            <div className='flex justify-center items-center w-full h-10 border-lightGray border-b'>
              <a href='#about' className='hover:text-pink'>
                About
              </a>
            </div>
            <div className='flex justify-center items-center w-full h-10 border-lightGray border-b'>
              <a href='#services' className='hover:text-pink'>
                Services
              </a>
            </div>
            <div className='flex justify-center items-center w-full h-10 border-lightGray border-b'>
              <a href='#projects' className='hover:text-pink'>
                Projects
              </a>
            </div>
            <div className='flex justify-center items-center w-full h-10 border-lightGray border-b'>
              <a href='#blog' className='hover:text-pink'>
                Blog
              </a>
            </div>
            <div className='flex justify-center items-center w-full h-10 border-lightGray border-b'>
              <a href='#contact' className='hover:text-pink'>
                Contact
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default HamburgerMenu;
