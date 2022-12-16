import React from "react";
import './feature.css'
import blackT_shirt from '../../Media/Products/black.jpg'
import shortSleeveT_shirt from '../../Media/Products/Short-Sleeve.jpg'
import book from '../../Media/Products/book.jpg'
import working from '../../Media/Products/working.jpg'
import {GiSelfLove} from 'react-icons/gi'
import { BsCart2 } from "react-icons/bs";

const Featured = () => {
  return (
    <section className="my-16">
      <div className="Container">
        <div className="text-center px-5">
          <p className="font-bold text-violet-700 mb-4">
            TOP SALE ON THIS WEEK
          </p>
          <h1 className="text-4xl text-pink-500 font-bold mb-4">
            Featured Products
          </h1>
          <p className="text-gray-500 lg:w-[560px] m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 px-16 lg:px5">
          <div className="card card-compact bg-base-100 cursor-pointer">
            <div className="absolute top-0 right-0 p-3 bg-white hart">
            <GiSelfLove/>
            </div>
            <div className="w-full h-[258px]">
              <img
                className="w-full h-full object-cover"
                src={blackT_shirt}
                alt="Shoes"
              />
            </div>
            <div className="card-body">
              <h2 className="card-title justify-center text-gray-400 hover:text-blue-700 text-[14px]">Black Fashion Jacket</h2>
              <div className="rating justify-center">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <div className="card-actions justify-center content-center flex-col lg:overflow-hidden lg:h-[20px]">
                <div className="price text-center">
                  <p>20,00 ر.س</p>
                  <a href="/" className="transition-all hover:text-blue-600 flex content-center"><BsCart2 className="inline mr-2" />Add to cart</a>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 cursor-pointer">
            <div className="absolute top-0 right-0 p-3 bg-white hart">
              <GiSelfLove/>
            </div>
            <div className="w-full h-[258px]">
              <img
                className="w-full h-full object-cover"
                src={shortSleeveT_shirt}
                alt="Shoes"
              />
            </div>
            <div className="card-body">
              <h2 className="card-title justify-center text-gray-400 hover:text-blue-700 text-[14px]">Short Sleeve Tshirt</h2>
              <div className="card-actions justify-center content-center flex-col lg:overflow-hidden lg:h-[20px]">
                <div className="price text-center">
                  <p>20,00 ر.س</p>
                  <a href="/" className="transition-all hover:text-blue-600 flex content-center"><BsCart2 className="inline mr-2" />Add to cart</a>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 cursor-pointer">
            <div className="absolute top-0 right-0 p-3 bg-white hart">
            <GiSelfLove/>
            </div>
            <div className="w-full h-[258px]">
              <img
                className="w-full h-full object-cover"
                src={book}
                alt="Shoes"
              />
            </div>
            <div className="card-body">
              <h2 className="card-title justify-center text-gray-400 hover:text-blue-700 text-[14px]">Single Store Book</h2>
              <div className="card-actions justify-center content-center flex-col lg:overflow-hidden lg:h-[20px]">
                <div className="price text-center">
                  <p>20,00 ر.س</p>
                  <a href="/" className="transition-all hover:text-blue-600 flex content-center"><BsCart2 className="inline mr-2" />Add to cart</a>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 cursor-pointer">
            <div className="absolute top-0 right-0 p-3 bg-white hart">
            <GiSelfLove/>
            </div>
            <div className="w-full h-[258px]">
              <img
                className="w-full h-full object-cover"
                src={working}
                alt="Shoes"
              />
            </div>
            <div className="card-body"> 
              <h2 className="card-title justify-center text-gray-400 hover:text-blue-700 text-[14px]">Working Boy Tshirt</h2>
              <div className="card-actions justify-center content-center flex-col lg:overflow-hidden lg:h-[20px]">
                <div className="price text-center">
                  <p>20,00 ر.س</p>
                  <a href="/" className="transition-all hover:text-blue-600 flex content-center"><BsCart2 className="inline mr-2" />Add to cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center content-center my-8">
          <button className="btn py-3 px-7 bg-violet-700 rounded-full">Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
