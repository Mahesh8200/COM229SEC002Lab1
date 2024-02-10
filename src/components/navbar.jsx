import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const nav = () => {
  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(true);
  }
  function closeMenu() {
    setToggle(false);
  }

  return (
    <>
      <div className="flex fixed top-0 w-full items-center justify-between lg:flex-row bg-blue-600">
        <img src={Logo} alt="Logo" className="h-58 w-20 m-2" />
        <div className="space-x-2">
          <div className="ssm:hidden lg:block space-x-4">
            <Link to="/" className="rounded-full px-5 py-2 text-xl">
              HOME
            </Link>
            <Link to="/about" className="rounded-full px-5 py-2 text-xl">
              ABOUT
            </Link>
            <Link to="/project" className="rounded-full px-5 py-2 text-xl">
              PROJECTS
            </Link>
            <Link to="/services" className="rounded-full px-5 py-2 text-xl">
              SERVICES
            </Link>
            <Link to="/contact" className="rounded-full px-5 py-2 text-xl">
              CONTACT ME
            </Link>
          </div>
          <div className="ssm:block lg:hidden">
            {toggle ? (
              <AiOutlineClose
                onClick={closeMenu}
                size={25}
                className=" cursor-pointer"
              />
            ) : (
              <HiMenuAlt1
                onClick={openMenu}
                size={25}
                className=" cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>

      <div>
        {toggle ? (
          <div className="flex justify-between ml-10 mt-20">
            <ul>
              <li className="text-xl mb-2 cursor-pointer">
                <Link to="/">HOME</Link>
              </li>
              <li className="text-xl mb-2 cursor-pointer">
                <Link to="/about">ABOUT</Link>
              </li>
              <li className="text-xl mb-2 cursor-pointer">
                <Link to="/project">PROJECTS</Link>
              </li>
              <li className="text-xl mb-2 cursor-pointer">
                <Link to="/services">SERVICES</Link>
              </li>
              <li className="text-xl mb-2 cursor-pointer">
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default nav;
