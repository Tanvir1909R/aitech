import React from "react";
import tShirt from "../../Media/categories/t-shirt.jpg";
import children from "../../Media/categories/children.jpg";
import glasses from "../../Media/categories/glasses.jpg";
import shoe from "../../Media/categories/shoe.jpg";
import phone from "../../Media/categories/phone.jpg";
import bag from "../../Media/categories/bag.jpg";

const Fashion = () => {
  return (
    <section>
      <div className="Container my-16">
        <div className="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card relative h-[250px] transition-all hover:-translate-y-3">
            <div className="w-full h-full">
              <img className="w-full h-full" src={tShirt} alt="t-shirt" />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-full flex justify-end flex-col text-black p-7">
              <h2 className="card-title mb-4">T Shirt</h2>
              <div>
                <button className="btn btn-sm">View more</button>
              </div>
            </div>
          </div>
          <div className="card relative h-[250px] transition-all hover:-translate-y-3">
            <div className="w-full h-full">
              <img className="w-full h-full" src={children} alt="children" />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-full flex justify-end flex-col text-black p-7">
              <h2 className="card-title mb-4">Children</h2>
              <div>
                <button className="btn btn-sm">View more</button>
              </div>
            </div>
          </div>
          <div className="card relative h-[250px] transition-all hover:-translate-y-3">
            <div className="w-full h-full">
              <img className="w-full h-full" src={glasses} alt="Sunglasses" />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-full flex justify-end flex-col text-black p-7">
              <h2 className="card-title mb-4">Sunglasses</h2>
              <div>
                <button className="btn btn-sm">View more</button>
              </div>
            </div>
          </div>
          <div className="card relative h-[250px] transition-all hover:-translate-y-3">
            <div className="w-full h-full">
              <img className="w-full h-full" src={shoe} alt="shoes" />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-full flex justify-end flex-col text-black p-7">
              <h2 className="card-title mb-4">Shoes</h2>
              <div>
                <button className="btn btn-sm">View more</button>
              </div>
            </div>
          </div>
          <div className="card relative h-[250px] transition-all hover:-translate-y-3">
            <div className="w-full h-full">
              <img className="w-full h-full" src={phone} alt="phone" />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-full flex justify-end flex-col text-black p-7">
              <h2 className="card-title mb-4">Phone</h2>
              <div>
                <button className="btn btn-sm">View more</button>
              </div>
            </div>
          </div>
          <div className="card relative h-[250px] transition-all hover:-translate-y-3">
            <div className="w-full h-full">
              <img className="w-full h-full" src={bag} alt="Bag" />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-full flex justify-end flex-col text-black p-7">
              <h2 className="card-title mb-4">Bag</h2>
              <div>
                <button className="btn btn-sm">View more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fashion;
