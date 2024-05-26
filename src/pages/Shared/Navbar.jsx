import { Link } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";

import { FaSearch } from "react-icons/fa";
import MenuItems from "./MenuItems";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto">
      {/* title and other */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-3xl font-black text-primary">
          Badhon NGO
        </Link>
      </div>
      {/* middle menu */}
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          {/* list item -1 */}
          <li className="">
            <div className="dropdown dropdown-hover">
              <label className="text-primary flex items-center gap-3">
                Who We Are <IoChevronDown></IoChevronDown>
              </label>

              <MenuItems type="who_we_are"></MenuItems>
            </div>
          </li>
          {/* list item 2 */}
          <li className="">
            <div className="dropdown dropdown-hover dropdown-bottom">
              <label className="text-primary flex items-center gap-3">
                What We Do <IoChevronDown></IoChevronDown>
              </label>

              <MenuItems type="what_we_do"></MenuItems>
            </div>
          </li>
          {/* list item 3 */}
          <li className="">
            <div className="dropdown dropdown-hover dropdown-bottom">
              <label className="text-primary flex items-center gap-3">
                Contents <IoChevronDown></IoChevronDown>
              </label>

              <MenuItems type="contents"></MenuItems>
            </div>
          </li>
        </ul>
      </div>

      {/* end button */}
      <div className="navbar-end">
        <a className="btn btn-primary text-white mr-5">Donate</a>
        <div className="font-bold">
          <FaSearch></FaSearch>
        </div>
      </div>
    </div>
  );
}
