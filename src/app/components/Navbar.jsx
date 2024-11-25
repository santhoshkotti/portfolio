"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className={`fixed mx-auto top-0 md:top-5 left-0 right-0 z-10  ${navbarOpen ? "bg-[#121212] bg-opacity-100 border-b border-[#33353F]" : ""}`}>
      <div className="flex container lg:py-4 flex-wrap items-center md:justify-center sm:justify-start mx-auto px-4 py-2">
        {/* <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          LOGO
        </Link> */}
        {/* below is for mobile view */}
        <div className="mobile-menu block md:hidden ">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        {/* below is for desktop view */}
        <div className="menu hidden md:block md:w-auto border rounded-md border-[#33353F] px-4 py-2 bg-[#121212] bg-opacity-90 
        [background:linear-gradient(45deg,#172033,theme(colors.primary.900)_48%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.primary.600/.48)_80%,_theme(colors.secondary.500)_86%,_theme(colors.secondary.300)_90%,_theme(colors.secondary.500)_94%,_theme(colors.slate.600/.48))_border-box] border-transparent animate-border" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
