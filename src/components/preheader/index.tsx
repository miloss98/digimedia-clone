import Link from "next/link";
import { Mail, Phone, Twitter, Linkedin, GitHub } from "react-feather";
const Preheader = () => {
  return (
    <section className="flex justify-between items-center h-20 px-4 md:h-14 bg-preheader md:px-10 lg:px-20">
      <div className="flex flex-col gap-2 items-start md:flex-row md:items-center">
        <div className="flex flex-row items-center">
          <Mail className="h-4 w-4 text-darkGray" />
          <Link
            href="#"
            className="text-xs text-darkGray pr-0 pl-2 hover:underline hover:text-pink md:text-base md:pr-10"
          >
            digimedia@info.com
          </Link>
        </div>
        <div className="flex flex-row items-center">
          <Phone className="h-4 w-4 text-darkGray" />
          <Link
            href="#"
            className="text-xs text-darkGray pl-2 hover:underline hover:text-pink md:text-base"
          >
            010-020-0340
          </Link>
        </div>
      </div>
      {/* social links */}
      <div className="flex flex-wrap items-center justify-center gap-1">
        <p className="hidden text-darkGray pr-2 md:block"> Find us: </p>
        <div className="flex justify-center items-center h-8 w-8 bg-white hover:bg-pinkHover rounded-full md:h-8 md:w-8">
          <Link href="https://www.twitter.com" target="_blank">
            <Twitter className="h-6 w-6 md:h-5 md:w-5 text-twitterBlue" />
          </Link>
        </div>
        <div className="flex justify-center items-center h-8 w-8 bg-white hover:bg-pinkHover rounded-full md:h-8 md:w-8">
          <Link href="https://www.linkedin.com" target="_blank">
            <Linkedin className="h-6 w-6 md:h-5 md:w-5 text-linkedIn" />
          </Link>
        </div>
        <div className="flex justify-center items-center h-8 w-8 bg-white hover:bg-pinkHover rounded-full md:h-8 md:w-8">
          <Link href="https://www.github.com" target="_blank">
            <GitHub className="h-6 w-6 md:h-5 md:w-5 text-github" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Preheader;
