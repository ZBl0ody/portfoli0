import React from "react";
import Btn from "../Component/Btn";
import Ball from "../Component/Ball";
import Services from "./Services";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="flex items-center flex-1 min-h-screen flex-col md:flex-row  ">
        <div
          className="flex flex-col flex-1 z-40 items-center 
             sm:items-start text-center sm:text-left"
        >
          <motion.h1
            className="uppercase text-3xl font-extralight leading-10	"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            i am a professional
            <br />
            <motion.span
              className="text-main  font-bold"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Front end web developer
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-xs leading-5 my-6 w-96 "
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            As a skilled front-end developer with expertise in React, Next.js,
            and Three.js, I am passionate about creating engaging and dynamic
            user experiences. With a keen eye for detail, I excel at crafting
            visually stunning interfaces that captivate users and drive
            engagement.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Btn to="hire" type="primary">
              Hire Me
            </Btn>
          </motion.div>
        </div>
        <div className="flex-1 flex justify-center h-screen w-full ">
          <Ball />
          {/* <div className="floating-element bg-gradient-to-br from-main to-second w-96 h-96 rounded-full opacity-50"></div> */}
        </div>
      </div>
      <Services />
    </>
  );
};

export default Home;
