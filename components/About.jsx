import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16 mb-26">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am a highly motivated BCA graduate from Symbiosis International
            University with a strong drive to excel in the dynamic field of
            technology. With a keen eye for detail and a creative mind, I am
            constantly seeking out new challenges to overcome and innovative
            solutions to complex problems. Through my dedication and commitment
            to personal and professional growth, I am confident in my ability to
            make a meaningful impact in any environment.
          </p>
          <p className="py-2 text-gray-600">
            I am a creative problem-solver who enjoys finding innovative
            solutions to complex design and development challenges. I am
            constantly exploring new ideas and techniques to enhance the user
            experience and ensure that the final product meets both user and
            business requirements.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
