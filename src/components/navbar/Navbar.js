import React, { useEffect, useRef, useState } from "react";
import Logo from "../../Media/logo.png";
import { BsSearch, BsCart2 } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
import { TfiUser } from "react-icons/tfi";
import { FiMenu } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./nav.css";

const Navbar = ({ handleMenu, layout, handleLayout }) => {
  const [innerWidth, setInnerWidth] = useState(0);
  const shopLinks = useRef(null);
  const arrow = useRef(null);
  useEffect(() => {
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      setInnerWidth(width);
    });
  }, []);
  const handleArrow = () => {
    shopLinks.current.classList.toggle("shopLink_active");
    console.log(arrow.current);
  };
  return (
    <div className=" headerWrapper py-5 px-5 overflow-hidden">
      <div
        className="bar cursor-pointer lg:hidden md:block sm:block"
        onClick={handleMenu}
      >
        <FiMenu className="text-3xl" />
      </div>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <nav>
        {innerWidth < 1024 && (
          <div className="inputField">
            <div>
              <input type="text" placeholder="search Products" />
            </div>
            <div className="search">
              <BsSearch />
            </div>
          </div>
        )}
        <a href="/">Home</a>
        <a href="/">Blog</a>
        {innerWidth < 1024 ? (
          <>
            <div className="shop">
              <a href="/">Shop</a>
              <div className="cursor-pointer arrow" onClick={handleArrow}>
                <MdOutlineKeyboardArrowDown ref={arrow} />
              </div>
            </div>
            <div className="shopLink" ref={shopLinks}>
              <a href="/">Jacket</a>
              <a href="/">Book</a>
            </div>
          </>
        ) : (
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="cursor-pointer">
              Shop <MdOutlineKeyboardArrowDown className="inline" />
            </label>
            <div
              tabIndex={0}
              className="dropdown-content menu p-4 bg-base-100 w-52"
            >
              <a href="/" className="mb-1">
                Jacket
              </a>
              <a href="/">Book</a>
            </div>
          </div>
        )}
        <a href="/">Track Order</a>
        <a href="/">Contact us</a>
        <div className="layout" ref={layout} onClick={handleLayout}></div>
      </nav>
      <div className="icons flex content-center justify-end">
        <div className="icon hidden">
          <BsSearch />
        </div>
        <div className="icon quantity">
          <GiSelfLove />
        </div>
        <div className="dropdown dropdown-hover flex justify-center content-center">
          <label tabIndex={0}>
            <TfiUser />
          </label>
          <label
            tabIndex={0}
            className="dropdown-content menu p-4 shadow bg-base-100 w-52 translate-y-14"
          >
            <p className="cursor-pointer hover:text-blue-700 text-[1rem]">
              Login/Register
            </p>
          </label>
        </div>
        <div className="icon quantity">
          <BsCart2 />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
