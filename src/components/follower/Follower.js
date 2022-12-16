import React from "react";
import Slide from "../followSlide/Slide";

const Follower = () => {
  return ( 
    <section className="my-16">
      <div className="Container px-2">
        <div className="text-center">
          <p className="font-bold text-violet-700 mb-4">
            TOP SALE ON THIS WEEK
          </p>
          <h1 className="text-4xl text-pink-500 font-bold mb-4">
          Follow Us on Instagram
          </h1>
        </div>
        <div className="mt-10 px-10">
            <Slide/>
        </div>
      </div>
    </section>
  );
};

export default Follower;
