import Image from "next/image";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import about from "public/about.png";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col-reverse justify-center items-start w-full px-4 md:flex-row md:px-10 lg:px-20"
    >
      <div className="hidden md:flex md:justify-center md:items-center md:h-screen md:w-1/2 relative">
        <Image src={about} alt="about" fill />
      </div>
      <div className="flex flex-col justify-center items-center pl-4 mt-20 h-1/2 w-full md:h-full md:w-1/2 md:gap-10">
        <section className="flex flex-col justify-center items-center mb-4 gap-4 md:items-start md:mb-0">
          <p className="w-3/4 font-semibold text-lg text-center text-purple uppercase md:text-left md:text-xl lg:text-2xl">
            About us
          </p>
          <p className="font-bold text-2xl text-center md:text-left md:text-4xl md:tex-left lg:text-5xl">
            Who is DigiMedia <span className="text-purple">Agency?</span>
          </p>
          <div className="h-0.5 w-16 bg-purple"> </div>
          <p className="w-3/4 text-center text-sm md:text-left md:text-md lg:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt a
            sit harum eligendi laboriosam doloremque.
          </p>
        </section>
        <section className="flex flex-col justify-start items-center w-full md:flex-row md:justify-start md:gap-5">
          <div className="flex flex-col justify-center items-center my-5">
            <CircularProgressbar
              styles={{
                path: {
                  stroke: "#fa65b1",
                },
                text: {
                  fill: "#fa65b1",
                },
              }}
              value={80}
              maxValue={100}
              text={"80%"}
              className="h-32"
            />
            <p className="text-pink pt-2"> coding</p>
          </div>

          <div className="flex flex-col justify-center items-center my-5">
            <CircularProgressbar
              styles={{
                path: {
                  stroke: "#7369e3",
                },
                text: {
                  fill: "#7369e3",
                },
              }}
              value={90}
              maxValue={100}
              text={"90%"}
              className="h-32"
            />
            <p className="text-purple pt-2"> photoshop</p>
          </div>
          <div className="flex flex-col justify-center items-center my-5">
            <CircularProgressbar
              styles={{
                path: {
                  stroke: "#f68b57",
                },
                text: {
                  fill: "#f68b57",
                },
              }}
              value={90}
              maxValue={100}
              text={"90%"}
              className="h-32"
            />
            <p className="text-orange pt-2"> animation</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
