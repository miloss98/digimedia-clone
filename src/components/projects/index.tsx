import Image from "next/image";
import portfolioImg1 from "../../../public/assets/portfolio1.png";
import portfolioImg2 from "../../../public/assets/portfolio2.jpeg";
import portfolioImg3 from "../../../public/assets/portfolio3.jpeg";
import portfolioImg4 from "../../../public/assets/portfolio4.jpeg";

const Projects = () => {
  const projects = [
    {
      id: 0,
      name: "Website Building",
      category: "development",
      image: portfolioImg1,
    },
    {
      id: 1,
      name: "Web-App Building",
      category: "development",
      image: portfolioImg2,
    },
    {
      id: 2,
      name: "UI/UX",
      category: "design",
      image: portfolioImg3,
    },
    {
      id: 3,
      name: "Penetration Testing",
      category: "security",
      image: portfolioImg4,
    },
  ];
  return (
    <div
      id='projects'
      className='flex flex-col justify-center items-center w-full mt-16 px-4 md:px-10 lg:px-20 '
    >
      <section className='flex flex-col justify-center items-center mb-16 gap-4 md:mb-0'>
        <p className='font-semibold text-lg text-center text-purple uppercase md:text-xl lg:text-2xl'>
          Our portofolio
        </p>
        <p className='font-bold text-2xl text-center md:text-4xl lg:text-5xl'>
          See our recent <span className='text-purple'>Projects</span>
        </p>
        <div className='h-0.5 w-16 bg-purple'> </div>
      </section>
      <section className='grid grid-cols-1 w-full mb-8 md:grid-cols-2 md:gap-4 lg:grid-cols-4 md:mt-16'>
        {projects.map((project) => {
          const { id, name, category, image } = project;
          return (
            <div
              className='w-full h-80 mb-8 shadow-darkGray shadow-md rounded-2xl hover:cursor-pointer hover:shadow-pink'
              key={id}
            >
              <div className='h-3/4 rounded-lg'>
                <Image
                  src={image}
                  alt='portfolio1'
                  className='w-full h-full rounded-t-2xl bg-contain'
                />
              </div>
              <div className='h-1/4 flex flex-col justify-center items-center'>
                <p className='font-bold text-lg'> {name}</p>
                <p className='text-sm capitalize'> {category} </p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Projects;
