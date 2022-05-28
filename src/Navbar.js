import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./asset/Navbar.css";
import Laundry from "./asset/laundry.png";
import Fotoku from "./asset/fotoku.jpeg";
import { FiChevronDown } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState({});
  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };
  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }
  const url = useLocation();
  console.log("url", url);
  return (
    <nav className="fixed top-0 right-0 left-0 navbar bg-sky-900 flex justify-around items-center h-16 text-white px-10 z-20">
      <img src={Laundry} className="h-16 ml-16" alt="londri" />
      <ul className="flex-1 md:flex lg:flex hidden justify-end list-none w-5">
        <Link
          to="/dashboard"
          className="no-underline slate-50 text-base p-2.5 m-2.5 cursor-pointer"
        >
          <li className="relative font-poppins">
            Dashboard
            {url.pathname === "/dashboard" && (
              <span className="absolute bottom-[-20px] bg-orange-400 h-[4px]  text-orange-500 left-0 right-0 z-[1]" />
            )}
          </li>
        </Link>
        <Link
          to="/layanan-kami"
          className="paket_laundry no-underline slate-50 text-base p-2.5 m-2.5 cursor-pointer"
        >
          <li className="relative font-poppins">
            Layanan Kami
            {url.pathname === "/layanan-kami" && (
              <span className="absolute bottom-[-20px] bg-orange-400 h-[4px] left-0 right-0 z-[1]" />
            )}
          </li>
        </Link>
        <li
          onClick={() =>
            setIsDropdownOpen({
              ...isDropdownOpen,
              bantuan: !isDropdownOpen.bantuan,
            })
          }
          className="menu-item sub__menus__arrows p-2.5 m-2.5"
        >
          {" "}
          <Link
            to="#"
            className="flex flex-row items-center gap-1 font-poppins"
          >
            {" "}
            Bantuan <FiChevronDown />{" "}
          </Link>
          <div
            className={`${
              isDropdownOpen?.bantuan ? "block" : "hidden"
            } absolute bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4`}
          >
            <li>
              <a
                href="/syarat-dan-ketentuan"
                className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 font-poppins"
              >
                Syarat dan Ketentuan
              </a>
            </li>
            <li>
              <a
                href="/kontak-kami"
                className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 font-poppins"
              >
                Kontak Kami
              </a>
            </li>
            <li>
              <a
                href="/register"
                className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 font-poppins"
              >
                Sign out
              </a>
            </li>
          </div>
        </li>
        <li
          onClick={() =>
            setIsDropdownOpen({
              ...isDropdownOpen,
              myAccount: !isDropdownOpen.myAccount,
            })
          }
          className="menu-item sub__menus__arrows p-2.5 m-2.5"
        >
          {" "}
          <Link
            to="#"
            className="flex flex-row items-center gap-1 font-poppins"
          >
            {" "}
            <img
              src={Fotoku}
              alt="foto"
              className="w-8 rounded-[100px]"
            />{" "}
            <FiChevronDown />{" "}
          </Link>
          <div
            className={`${
              isDropdownOpen?.myAccount ? "block" : "hidden"
            } absolute bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4`}
          >
            <li>
              <div className="flex items-center">
                <CgProfile className="text-black ml-2"/>
                <a
                  href="/#"
                  className="text-sm hover:bg-gray-100 text-gray-700 block px-3 py-2 font-poppins"
                >
                  Profil
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <MdLogout className="text-black ml-2"/>
                <a
                  href="/register"
                  className="text-sm hover:bg-gray-100 text-gray-700 block px-3 py-2 font-poppins"
                >
                  Log out
                </a>
              </div>
            </li>
          </div>
        </li>
      </ul>
      <ul className="md:hidden lg:hidden visible">
        <li>Menu</li>
      </ul>
    </nav>
  );
};

export default Navbar;
