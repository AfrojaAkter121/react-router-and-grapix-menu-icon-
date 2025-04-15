import { Menu } from "lucide-react";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";

const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const links = navigationData.map((route) => (
    <li key={route.id}>
      <NavLink to={route.path}>{route.name}</NavLink>
    </li>
  ));

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <nav className="flex fixed w-full top-0 z-10 justify-between items-center md:px-10 p-4 bg-lime-800 text-white">
      <span className="flex">
        <Menu onClick={() => setOpen(!open)} className="md:hidden"></Menu>
        <ol
          className={`md:hidden absolute z-10 ${
            open ? "left-0" : "-left-20"
          } duration-400 text-black mt-11 p-2 space-y-2  bg-lime-100`}
        >
          {links}
        </ol>
        <h1 className="ml-4 font-bold">AFROJA</h1>
      </span>

      <ul className="hidden md:flex gap-5 justify-center">{links}</ul>

      <button onClick={handleNavigate} className="btn h-8">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Nav;
