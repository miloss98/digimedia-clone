import Image from "next/image";
import { useState } from "react";
import { Check, Activity, Cpu, BarChart2, HardDrive } from "react-feather";
import servicesImage1 from "public/services-image1.jpg";
import servicesImage2 from "public/services-image2.jpg";
import servicesImage3 from "public/services-image3.jpg";
import servicesImage4 from "public/services-image4.jpg";

const services = [
  {
    id: 0,
    name: "SEO Analysis & Daily Reports",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasilaborum inventore eos facere, ex quos",
    tags: ["Optimized Template", "Data Info", "SEO Analysis"],
    image: servicesImage1,
  },
  {
    id: 1,
    name: "Healthy Food & Life",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasilaborum inventore eos facere, ex quos",
    tags: ["Optimized Template", "Data Info"],
    image: "/services-image2.jpg",
  },
  {
    id: 2,
    name: "Car Re-search & Transport",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasilaborum inventore eos facere, ex quos",
    tags: [
      "Optimized Template",
      "Data Info",
      "Optimized Template",
      "Data Info",
      "SEO Analysis",
    ],
    image: servicesImage3,
  },
  {
    id: 3,
    name: "Online Shopping & Tracking ID",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasilaborum inventore eos facere, ex quos",
    tags: [
      "Optimized Template",
      "Data Info",
      "Data Info",
      "Optimized Template",
    ],
    image: servicesImage4,
  },
];

const Services = () => {
  const [servicesData] = useState(services);
  const [currentAccordion, setCurrentAccordion] = useState<number>(0);
  return (
    <div
      id="services"
      className="flex flex-col justify-center items-center w-full mt-16 px-4 md:px-10 lg:px-20 "
    >
      <section className="flex flex-col justify-center items-center mb-4 gap-4 md:mb-0">
        <p className="font-semibold text-lg text-center text-purple uppercase md:text-xl lg:text-2xl">
          Our services
        </p>
        <p className="font-bold text-2xl text-center md:text-4xl lg:text-5xl">
          What our agency <span className="text-purple">Provides?</span>
        </p>
        <div className="h-0.5 w-16 bg-purple"> </div>
      </section>

      {/* accordion header */}
      <section className="flex flex-col justify-center items-center w-full">
        <div className="flex w-full justify-center items-center gap-2 py-2 mt-12 mb-4 rounded-lg md:h-20 md:gap-5 lg:h-24 lg:gap-8">
          <div
            onClick={() => setCurrentAccordion(0)}
            className="bg-white h-12 w-12 p-1 shadow-darkGray shadow-md rounded-full hover:cursor-pointer hover:bg-lightGray md:p-2 md:h-16 md:w-16 lg:h-20 lg:w-20"
          >
            <Activity className="text-red h-full w-full" />
          </div>
          <div
            onClick={() => setCurrentAccordion(1)}
            className="bg-white h-12 w-12 p-1 shadow-darkGray shadow-md rounded-full hover:cursor-pointer hover:bg-lightGray md:p-2 md:h-16 md:w-16 lg:h-20 lg:w-20"
          >
            <BarChart2 className="text-green h-full w-full" />
          </div>
          <div
            onClick={() => setCurrentAccordion(2)}
            className="bg-white h-12 w-12 p-1 shadow-darkGray shadow-md rounded-full hover:cursor-pointer hover:bg-lightGray md:p-2 md:h-16 md:w-16 lg:h-20 lg:w-20"
          >
            <Cpu className="text-orange h-full w-full" />
          </div>
          <div
            onClick={() => setCurrentAccordion(3)}
            className="bg-white h-12 w-12 p-1 shadow-darkGray shadow-md rounded-full hover:cursor-pointer hover:bg-lightGray md:p-2 md:h-16 md:w-16 lg:h-20 lg:w-20"
          >
            <HardDrive className="text-purple h-full w-full" />
          </div>
        </div>

        {/* accordion content */}
        <div className="flex flex-col justify-center items-center w-full px-4 mb-10 shadow-darkGray shadow-md rounded-lg">
          <div className="py-8 px-4 lg:flex lg:flex-row">
            <div className="md:flex md:flex-col md:justify-center md:items-start">
              <p className="font-semibold text-lg text-pink py-4 capitalize md:text-xl lg:text-2xl">
                {servicesData[currentAccordion].name}
              </p>
              <p className="text-darkGray text-sm py-4 w-3/4 md:text-md lg:text-lg">
                {servicesData[currentAccordion].text}
              </p>
              <ul className="py-8">
                {servicesData[currentAccordion].tags.map((tag) => {
                  return (
                    <li
                      className="flex items-center text-sm md:text-md lg:text-lg"
                      key={Math.random()}
                    >
                      <Check className="text-green" /> {tag}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="md:flex md:flex-col md:justify-center">
              <Image
                src={servicesData[currentAccordion].image}
                alt="service_image1"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
