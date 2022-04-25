import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./asset/Navbar.css";
import clean from "./asset/clean.png";
import { FiChevronDown } from "react-icons/fi";
const Navbar = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    <nav className="fixed top-0 right-0 left-0 navbar bg-hippie-blue-500 flex justify-around items-center h-16 text-white px-10 z-20">
      <img src={clean} className="h-24 ml-16" alt="londri" />
      <ul className="flex-1 md:flex lg:flex hidden justify-end list-none w-5">
        <Link to="/dashboard" className="manajemen_user no-underline slate-50 text-base p-2.5 m-2.5 cursor-pointer">
          <li className="relative">
            Dashboard
            {url.pathname === "/dashboard" && (
              <span className="absolute bottom-[-20px] bg-orange-400 h-[4px]  text-orange-500 left-0 right-0 z-[1]" />
            )}
          </li>
        </Link>
        <Link to="/paket-laundry" className="paket_laundry no-underline slate-50 text-base p-2.5 m-2.5 cursor-pointer">
          <li className="relative">
            Paket Laundry
            {url.pathname === "/paket-laundry" && (
              <span className="absolute bottom-[-20px] bg-orange-400 h-[4px] left-0 right-0 z-[1]" />
            )}
          </li>
        </Link>
        <li onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="menu-item sub__menus__arrows p-2.5 m-2.5">
          {" "}
          <Link to="#" className="flex flex-row items-center gap-1">
            {" "}
            Bantuan <FiChevronDown />{" "}
          </Link>
          <div className={`${isDropdownOpen ? 'block' : 'hidden'} absolute bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4`}>
            <div className="px-4 py-3">
              <span className="block text-sm font-medium text-gray-900 truncate">
                caisguna@gmail.com
              </span>
            </div>
              <li>
                <a href="/syarat-dan-ketentuan" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">
                  Syarat dan Ketentuan
                </a>
              </li>
              <li>
                <a href="/kontak-kami" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">
                  Kontak Kami
                </a>
              </li>
              <li>
                <a href="/register" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">
                  Sign out
                </a>
              </li>
          </div>
        </li>
        <Link to="/register" className="laporan no-underline slate-50 text-base p-2.5 m-2.5 cursor-pointer">
          <li className="border-1 px-4 rounded-md border-solid border-purple-600 bg-orange-400">
            Log out
          </li>
        </Link>
      </ul>
      <ul className="md:hidden lg:hidden visible">
        <li>Menu</li>
      </ul>
    </nav>
  );
};

export default Navbar;
