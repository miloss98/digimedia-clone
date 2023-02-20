const Contact = () => {
  return (
    <div
      id='projects'
      className='flex flex-col justify-center items-center w-full mt-16 px-4 md:px-10 lg:px-20 '
    >
      <section className='flex flex-col justify-center items-center mb-8 gap-4 md:mb-0'>
        <p className='font-semibold text-lg text-center text-purple uppercase md:text-xl lg:text-2xl'>
          Contact Us
        </p>
        <p className='font-bold text-2xl text-center capitalize md:text-4xl lg:text-5xl'>
          Get in touch with us <span className='text-purple'>Now</span>
        </p>
        <div className='h-0.5 w-16 bg-purple'> </div>
      </section>
      <section className='h-screen w-full flex flex-col justify-center items-center md:flex-row md:items-start md:mt-16'>
        <div className='h-1/2 w-full md:h-4/6 w-full'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45327.771447513085!2d19.16979023573939!3d44.76070604918411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475be91cb02d7249%3A0xde5f5ab6329ada88!2sBijeljina!5e0!3m2!1sen!2sba!4v1676903562114!5m2!1sen!2sba'
            loading='lazy'
            className='h-full w-full'
          />
        </div>
        <div className='h-1/2 w-full flex flex-col justify-center items-center gap-6 md:h-full md:justify-start md:items-center'>
          <input
            className='w-3/4 h-8 pl-4 rounded-md text-sm border border-darkGray md:h-10 md:text-md lg:w-2/4'
            type='email'
            placeholder='Email Address'
          />
          <input
            className='w-3/4 h-8 pl-4 rounded-md text-sm border border-darkGray md:h-10 md:text-md lg:w-2/4'
            type='email'
            placeholder='Phone'
          />
          <input
            className='w-3/4 h-8 pl-4 rounded-md text-sm border border-darkGray md:h-10 md:text-md lg:w-2/4'
            type='textarea'
            placeholder='Message'
          />
          <input
            className='w-3/4 h-8 pl-4 rounded-md text-sm border border-darkGray md:h-10 md:text-md lg:w-2/4'
            type='email'
            placeholder='Email Address'
          />
          <button className='w-3/4 h-8 text-sm bg-purple text-white rounded-md border hover:bg-pinkHover hover:text-white lg:w-2/4 lg:h-10'>
            Send
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
