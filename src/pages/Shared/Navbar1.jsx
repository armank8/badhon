import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import MenuItems from "./MenuItems";
export default function Navbar1() {
  const [openMenu, setOpenMenu] = useState(" ");

  const handleOpenMenu = (name) => {
    setOpenMenu(name);
  };
  console.log(openMenu);
  return (
    <nav className="flex justify-between items-center max-w-7xl mx-auto py-5">
      <div>Badhon Ngo</div>
      <ul className="flex gap-5">
        <li
          className="flex items-center gap-1 text-primary text-md px-2 py-1  rounded hover:bg-red-100"
          onMouseEnter={() => handleOpenMenu("who-we-are")}
          onMouseLeave={() => handleOpenMenu(" ")}
        >
          <label className="pb-1">Who we are</label>
          <IoChevronDown></IoChevronDown>

          <MenuItems type={openMenu}></MenuItems>
        </li>
        <li
          className="flex items-center gap-1 text-primary text-md px-2 py-1  rounded hover:bg-red-100"
          onMouseEnter={() => handleOpenMenu("what-we-do")}
          onMouseLeave={() => handleOpenMenu("")}
        >
          <label className="pb-1">What we do</label>
          <IoChevronDown></IoChevronDown>
          <MenuItems type={openMenu}></MenuItems>
        </li>

        <li
          className="flex items-center gap-1 text-primary text-md px-2 py-1  rounded hover:bg-red-100"
          onMouseEnter={() => handleOpenMenu("contents")}
          onMouseLeave={() => handleOpenMenu("")}
        >
          <label className="pb-1">Contents</label>
          <IoChevronDown></IoChevronDown>
          <MenuItems type={openMenu}></MenuItems>
        </li>
      </ul>
      <div>
        <span>Follow us on :</span>
        <FaFacebook></FaFacebook>
      </div>
    </nav>
  );
}
