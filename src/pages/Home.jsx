import React from "react";
import { BsDownload } from "react-icons/bs";

const Home = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center mx-5  mt-20">
      <div className="flex-1 text-center  lg:text-left mb-5 ">
        <h2 className="font-bold text-3xl mb-4">
          Hi,
          <br />
          I’m Ahmed <span className="text-red-500"> Alnajar</span>
        </h2>
        <div className="leading-none text-base lg:text-lg tracking-widest mb-5">
          User Interface Designer <br />
          <span className="-ml-5">&</span>
          <br /> Front end Developer
        </div>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ahmed-samir-abdon-b99156280"
        >
          <div className="flex items-center p-2 max-w-[200px] mx-auto lg:mx-0  bg-red-500 rounded-md justify-between">
            <div className=" text-stone-100 text-lg  ">Hire Me</div>
            <div className="bg-red-300 bg-opacity-50 rounded text-center py-1 px-2">
              &rarr;
            </div>
          </div>
        </a>
      </div>

      <div className="w-fit flex flex-col flex-1 items-start md:my-10 ">
        <img className="w-[250px] lg:w-[350px] " src="/main.png" alt="avatar" />
        <p className="tracking-widest ">Eng.ahmedsameer0@gmail.com</p>
      </div>

      <div className="max-w-[300px] mt-10 md:mt-0 lg:ml-16 flex-1 text-center lg:text-left  md:items-start md:justify-center  ">
        <div className="text-red-500 text-xl font-normal font-['Poppins'] tracking-wide">
          Expert on
        </div>
        <div className="text-white text-xl lg:text-3xl font-normal font-['Poppins'] tracking-wider">
          Based in Egypt
          <br />
          i’m Developer and <br />
          ui/ux Designer.
        </div>
        <div className="text-stone-500 lg:text-xl lg:text-start text-sm font-normal font-['Poppins'] tracking-wide my-5">
          hey are you looking for designer to build your brand and grow your
          business? let’s shack hands with me.
        </div>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1gcdFVV6caojo4t7_zz6FtHRbIKwn48Lk/view?usp=sharing"
        >
          <div className=" flex flex-col items-center lg:items-start cursor-pointer ">
            <div className=" text-red-500 text-xl font-normal font-['Poppins'] flex gap-2 items-center">
              Download CV
              <BsDownload />
            </div>
            <span className="w-[165px] h-[0px] left-0 top-[36px]  border-2 border-red-500" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
