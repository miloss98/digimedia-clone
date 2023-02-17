import { Check } from "react-feather";

const Services = () => {
  return (
    <div
      id='services'
      className='flex flex-col justify-center items-center w-full mt-16 px-4 md:px-10 lg:px-20 '
    >
      <section className='flex flex-col justify-center items-center mb-4 gap-4 md:items-center md:mb-0'>
        <p className='font-semibold text-lg text-center text-purple uppercase md:text-xl lg:text-2xl'>
          Our services
        </p>
        <p className='font-bold text-2xl text-center md:text-4xl lg:text-5xl'>
          What our agency <span className='text-purple'>Provides?</span>
        </p>
        <div className='h-0.5 w-16 bg-purple'> </div>
      </section>
      <section className='flex flex-col justify-center items-center w-full'>
        {/* accordion switcher */}
        <div className='flex w-full justify-center items-center h-16 shadow-gray shadow-lg mt-12 mb-4'>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
        </div>
        {/* content */}
        <div className='flex flex-col pl-4 w-full shadow-black shadow-lg rounded-lg'>
          <div className='py-8'>
            <p className='font-semibold text-lg text-pink pb-4 capitalize'>
              SEO Analysis & Daily Reports
            </p>
            <ul>
              <li className='flex'>
                <Check /> Optimized Template
              </li>
              <li className='flex'>
                <Check /> Data Info
              </li>
              <li className='flex'>
                <Check /> SEO Analysis
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
