import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  GitHub,
} from "react-feather";
const Preheader = () => {
  return (
    <section className='flex justify-between items-center h-20 px-4 md:h-14 bg-preheader md:px-10 lg:px-20'>
      <div className='flex flex-col gap-2 items-start md:flex-row md:items-center'>
        <div className='flex flex-row items-center'>
          <Mail className='h-4 w-4 text-darkGray' />
          <a
            href='#'
            className='text-xs text-darkGray pr-0 pl-2 hover:underline hover:text-pink md:text-base md:pr-10'
          >
            digimedia@company.com
          </a>
        </div>
        <div className='flex flex-row items-center'>
          <Phone className='h-4 w-4 text-darkGray' />
          <a
            href='#'
            className='text-xs text-darkGray pl-2 hover:underline hover:text-pink md:text-base'
          >
            010-020-0340
          </a>
        </div>
      </div>
      {/* social links */}
      <div className='flex flex-wrap items-start justify-center gap-1'>
        <div className='flex justify-center items-center h-6 w-6 bg-white hover:bg-pinkHover rounded-full md:h-8 md:w-8'>
          <a href='https://www.facebook.com' target='_blank'>
            <Facebook className='h-3 w-3 md:h-5 md:w-5 text-facebook' />
          </a>
        </div>
        <div className='flex justify-center items-center h-6 w-6 bg-white  hover:bg-pinkHover rounded-full md:h-8 md:w-8'>
          <a href='https://www.facebook.com' target='_blank'>
            <Twitter className='h-3 w-3 md:h-5 md:w-5 text-twitterBlue' />
          </a>
        </div>
        <div className='flex justify-center items-center h-6 w-6 bg-white hover:bg-pinkHover rounded-full md:h-8 md:w-8'>
          <a href='https://www.facebook.com' target='_blank'>
            <Instagram className='h-3 w-3 md:h-5 md:w-5 text-pink' />
          </a>
        </div>
        <div className='flex justify-center items-center h-6 w-6 bg-white hover:bg-pinkHover rounded-full md:h-8 md:w-8'>
          <a href='https://www.facebook.com' target='_blank'>
            <Linkedin className='h-3 w-3 md:h-5 md:w-5 text-linkedIn' />
          </a>
        </div>
        <div className='flex justify-center items-center h-6 w-6 bg-white hover:bg-pinkHover rounded-full md:h-8 md:w-8'>
          <a href='https://www.facebook.com' target='_blank'>
            <GitHub className='h-3 w-3 md:h-5 md:w-5 text-github' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Preheader;
