import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "./card";

const cards = [
  {
    url: "/mountains_landscape_hd_4k.jpg",
    title: "natours",
    id: 1,
  },
  {
    url: "/mountains_landscape_hd_4k.jpg",

    title: "Graduation Project",
    id: 2,
  },
  {
    url: "/mountains_landscape_hd_4k.jpg",

    title: "ecommerce",
    id: 3,
  },
  {
    url: "/mountains_landscape_hd_4k.jpg",

    title: "Zorz-Clan-e-sport-team",
    id: 4,
  },
  {
    url: "/mountains_landscape_hd_4k.jpg",

    title: "Title 5",
    id: 5,
  },
  {
    url: "/mountains_landscape_hd_4k.jpg",

    title: "Title 6",
    id: 6,
  },
  {
    url: "/mountains_landscape_hd_4k.jpg",

    title: "Title 7",
    id: 7,
  },
];

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 ">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
