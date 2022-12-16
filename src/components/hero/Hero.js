import React from "react";
import "./hero.css";
import heroImg from '../../Media/Blazer.png'

const Hero = () => {
  return (
    <section className="heroSection">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-[385px] overflow-hidden px-10 md:px-12">
        <div className="heroText">
          <p className="font-bold text-violet-700 my-4 text-center md:text-start lg:text-start">TOP SALE ON THIS WEEK</p>

          <h1 className="text-4xl font-bold leading-normal md:leading-normal lg:leading-[4.7rem] text-center md:text-start lg:text-start md:text-4xl lg:text-5xl xl:text-6xl my-4">Explore Amazing Fashionable Blazers This Shadi Season</h1>

          <div className=" flex justify-center md:justify-start lg:justify-start">
          <button className="btn rounded-full py-4 px-6 bg-violet-700 hover:bg-violet-900 border-none">Shop Now</button>
          <button className="btn rounded-full py-4 px-6 mx-7 bg-pink-500 hover:bg-pink-700 border-none">Learn More</button>
          </div>
        </div>
        <div className="heroImg w-full h-full hidden md:block lg:block">
            <img src={heroImg} alt="blazer" />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
