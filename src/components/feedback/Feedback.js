import React from "react";
import './feedback.css'
import client_1 from '../../Media/client-1.jpg'
import client_2 from '../../Media/client-2.jpg'
import client_3 from '../../Media/client-3.jpg'

const Feedback = () => {
  return (
    <section className="py-16 bg-gradient-to-t from-gray-100 to-white">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-0 justify-items-center px-5">
          <div className="text-center lg:text-start">
            <p className="text-violet-700 font-bold">Testimonials</p>
            <h1 className="text-7xl my-5 font-bold text-pink-400">What Our Clients Say</h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="flex justify-center content-center flex-col text-center">
            <h1 className="text-9xl">4.8</h1>
            <div className="rating rating-lg rating-half justify-center">
              <input type="radio" name="rating-10" className="rating-hidden" />
              <input
                type="radio"
                name="rating-10"
                className="bg-orange-400 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-orange-400 mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-orange-400 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-orange-400 mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-orange-400 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-orange-400 mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-orange-400 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-orange-400 mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-orange-400 mask mask-star-2 mask-half-1"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-orange-400 mask mask-star-2 mask-half-2"
              />
            </div>
            <h1 className="text-3xl font-bold mt-3">Average Customer Rating</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 px-5">
            <div className="shadow-lg rounded-3xl py-10 px-10">
                <p className="text-gray-400 text-xl mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className="author">
                    <div className="w-[100px]">
                        <img src={client_1} alt="client" className="client" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-400">John Kim</h1>
                        <p className="text-sm">Designer</p>
                    </div>
                </div>
            </div>
            <div className="shadow-lg rounded-3xl py-10 px-14 md:px-10 lg:px-10">
                <p className="text-gray-400 text-xl mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className="author">
                    <div className="w-[100px]">
                        <img src={client_2} alt="client" className="client" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-400">John Kim</h1>
                        <p className="text-sm">Designer</p>
                    </div>
                </div>
            </div>
            <div className="shadow-lg rounded-3xl py-10 px-10">
                <p className="text-gray-400 text-xl mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className="author">
                    <div className="w-[100px]">
                        <img src={client_3} alt="client" className="client" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-400">John Kim</h1>
                        <p className="text-sm">Designer</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
