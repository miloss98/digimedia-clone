import Image from "next/image";
import portfolio1 from "/public/portfolio1.png";
import portfolio2 from "/public/portfolio2.jpeg";
import portfolio3 from "/public/portfolio3.jpeg";
import portfolio4 from "/public/portfolio4.jpeg";

const Projects = () => {
  const projects = [
    {
      id: 0,
      name: "Website Building",
      category: "development",
      image: portfolio1,
    },
    {
      id: 1,
      name: "Web-App Building",
      category: "development",
      image: portfolio2,
    },
    {
      id: 2,
      name: "UI/UX",
      category: "design",
      image: portfolio3,
    },
    {
      id: 3,
      name: "Penetration Testing",
      category: "security",
      image: portfolio4,
    },
  ];
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center w-full mt-16 px-4 md:px-10 lg:px-20 "
    >
      <section className="flex flex-col justify-center items-center mb-16 gap-4 md:mb-0">
        <p className="font-semibold text-lg text-center text-purple uppercase md:text-xl lg:text-2xl">
          Our portofolio
        </p>
        <p className="font-bold text-2xl text-center md:text-4xl lg:text-5xl">
          See our recent <span className="text-purple">Projects</span>
        </p>
        <div className="h-0.5 w-16 bg-purple"> </div>
      </section>
      <section className="grid grid-cols-1 w-full mb-8 md:grid-cols-2 md:gap-4 lg:grid-cols-4 md:mt-16">
        {projects.map((project) => {
          const { id, name, category, image } = project;
          return (
            <div
              className="w-full h-80 mb-8 shadow-darkGray shadow-md rounded-2xl hover:cursor-pointer hover:shadow-pink"
              key={id}
            >
              <div className="h-3/4 rounded-lg relative">
                <Image
                  src={image}
                  alt={name}
                  className="w-full h-full rounded-t-2xl bg-contain"
                  fill
                />
              </div>
              <div className="h-1/4 flex flex-col justify-center items-center">
                <p className="font-bold text-lg"> {name}</p>
                <p className="text-sm capitalize"> {category} </p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Projects;
