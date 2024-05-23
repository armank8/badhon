import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" bg-base-100 h-20">
      <div className="navbar max-w-7xl mx-auto">
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
          <Link
            to="/"
            className="btn btn-ghost text-3xl text-primary font-bold"
          >
            Badhon
          </Link>
        </div>
        <div className="dropdown navbar-center hidden lg:flex">
          <ul className=" menu menu-horizontal px-1 ">
            <li>
              <details>
                <summary>Parent</summary>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary px-12">Donate</a>
        </div>
      </div>
    </div>
  );
}