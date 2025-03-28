import Image from "next/image";
import seo from "/public/seo.png";

const Blog = () => {
  return (
    <section
      id="home"
      className='flex flex-col justify-between items-center h-auto w-full bg-[url("/public/blog-left-dec.jpg")] bg-no-repeat bg-center px-4 mt-5 md:px-10 md:flex-row md:py-10 lg:px-20'
    >
      <div className="flex flex-col justify-center items-center w-full my-10 space-y-6 md:w-1/2 md:items-start">
        <p className="w-3/4 font-semibold text-lg text-center text-pink uppercase md:text-left md:text-xl lg:text-2xl">
          Digital media agency
        </p>
        <p className="w-3/4 font-bold text-2xl text-center md:text-left md:text-4xl lg:text-5xl">
          We boost your website traffic
        </p>
        <div className="h-0.5 w-16 bg-pink"> </div>
        <p className="w-3/4 text-center text-sm md:text-left md:text-md lg:text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quis
          enim ipsa totam omnis beatae eum porro quas asperiores! Doloribus!
        </p>
        <button className="w-32 text-sm bg-white text-pink p-3 rounded-full border border-pink hover:bg-pinkHover hover:text-white md:w-36 lg:w-40">
          Read more
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Image src={seo} alt="SEO" width={500} height={500} />
      </div>
    </section>
  );
};

export default Blog;
