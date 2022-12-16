import React from "react";
import van from "../../Media/van.png";
import customerServiceIcon from "../../Media/customer-service.png";
import cashIcon from "../../Media/money.png";
import "./service.css";

const Service = () => {
  return (
    <section className="my-5">
      <div className="Container px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="flex justify-between content-center px-20 md:px-10 lg:px-10 py-5 border-r border-r-none md:border-r-black lg:border-r-black">
          <div className="w-[50px] h-[50px]">
            <img className="w-full h-full" src={van} alt="van" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Free Shipping</h3>
            <p className="text-gray-400">On all orders above 100 Riyal</p>
          </div>
        </div>
        <div className="flex justify-between content-center px-20 md:px-10 lg:px-10 py-5 border-r border-r-none md:border-r-black lg:border-r-black">
          <div className="w-[50px] h-[50px]">
            <img
              className="w-full h-full"
              src={customerServiceIcon}
              alt="customerService"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Customer Service</h3>
            <p className="text-gray-400">24*7 Support to all Service</p>
          </div>
        </div>
        <div className="flex justify-between content-center px-20 md:px-10 lg:px-10 py-5">
          <div className="w-[50px] h-[50px]">
            <img className="w-full h-full" src={cashIcon} alt="cash" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Discount</h3>
            <p className="text-gray-400">Coupons to our Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
