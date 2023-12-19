import React from "react";
import { motion, useAnimation } from "framer-motion";

const ParallaxSection = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    controls.start({ y: scrollY / 2 });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      <motion.div initial={{ y: 0 }} animate={controls} className="flex h-full">
        <ParallaxImage src="./mountains.png" />
        <ParallaxImage src="/planets.png" />
        <ParallaxImage src="/sun.png" />
        <ParallaxImage src="/stars.png" />
      </motion.div>
    </div>
  );
};

const ParallaxImage = ({ src }) => {
  return (
    <motion.div
      className="flex-1 h-full bg-cover"
      style={{ backgroundImage: `url(${src})` }}
    />
  );
};

export default ParallaxSection;
