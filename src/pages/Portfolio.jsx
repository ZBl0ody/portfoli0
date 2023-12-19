import React from "react";
import HorizontalScrollCarousel from "../Component/HorizontalScrollCarousel ";
const portfolio = () => {
  return (
    <section className="mt-24">
      <h2 className="text-main text-3xl mb-6 font-bold text-center uppercase min-h-screen">
        portfolio
      </h2>
      <div>
        <HorizontalScrollCarousel />
      </div>
    </section>
  );
};

export default portfolio;
