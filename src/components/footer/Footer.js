import React from "react";
import Logo from '../../Media/logo.png'

const Footer = () => {
  return (
    <div className="Container bg-base-200">
      <div className="footer py-24 text-base-content px-10">
        <div>
          <img src={Logo} alt="logo" />
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Shop</span>
          <a href="/" className="link link-hover">My Account</a>
          <a href="/" className="link link-hover">Order</a>
          <a href="/" className="link link-hover">Download</a>
        </div>
        <div>
          <span className="footer-title">Support</span>
          <a href="/" className="link link-hover">Contact Us</a>
          <a href="/" className="link link-hover">Track Order</a>
          <a href="/" className="link link-hover">Wishlist</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Get 20% Off on all orders by subscribing to our news letter.</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered rounded-full w-full pr-16"
              />
              <button className="btn absolute top-0 right-0 rounded-l-none rounded-full bg-transparent border-none text-black hover:bg-transparent">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
