import React from "react";
import { useHistory } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";

const Footer = () => {
  return (
    <div className="bg-[#000] text-white">
      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-10 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img src="" alt="" style={{ filter: "brightness(0) invert(1)" }} />
          <br />
          <p>Step into Style: Discover Your Signature Look.</p>
          <div className="flex items-center mt-[15px]">
            <a
              href="https://www.facebook.com/dreamlook.dreamlook.3/"
              target="blank"
            >
              <AiFillFacebook size={25} className="cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/dreamlooksivagiri/?hl=en"
              target="blank"
            >
              <AiFillInstagram
                size={25}
                style={{ marginLeft: "15px", cursor: "pointer" }}
              />
            </a>
            <a href="https://www.youtube.com/@DreamLookfashion" target="blank">
              <AiFillYoutube
                size={25}
                style={{ marginLeft: "15px", cursor: "pointer" }}
              />
            </a>
          </div>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Company</h1>
          {footerProductLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Shop</h1>
          {footercompanyLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2  gap-20
         text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2024 . DreamLook . All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
      </div>
    </div>
  );
};

export default Footer;
