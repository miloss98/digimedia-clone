const Quote = () => {
  return (
    <div className='flex flex-col justify-center items-center px-4 h-96 w-full my-16 bg-[url("./../../public/quote-bg.jpg")] bg-no-repeat bg-center bg-cover'>
      <div className="flex flex-col justify-center items-center mb-4">
        <p className="font-semibold text-md text-center text-white uppercase mb-4 md:text-left md:text-lg lg:text-xl">
          Get your free quote
        </p>
        <p className="font-semibold text-3xl text-center text-white capitalize mb-4 md:text-left md:text-4xl lg:text-5xl">
          Grow with us now
        </p>
        <div className="h-0.5 w-16 bg-white"> </div>
      </div>
      <div className="w-full flex flex-col justify-center px-4 items-center gap-2 mt-4 md:flex-row md:gap-4 md:px-">
        <input
          className="w-full h-10 pl-4 rounded-lg text-sm md:w-1/4 md:h-10 md:text-md lg:w-1/5 "
          type="text"
          placeholder="Your website URL"
        />
        <input
          className="w-full h-10 pl-4 rounded-lg text-sm md:w-1/4 md:h-10 md:text-md lg:w-1/5 "
          type="email"
          placeholder="Email Address"
        />
        <button className="w-full h-10 rounded-lg bg-purple text-sm text-white hover:bg-pink md:w-1/4 md:h-10 md:text-lg lg:w-1/5 ">
          Get quote now
        </button>
      </div>
    </div>
  );
};

export default Quote;
