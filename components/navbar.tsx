"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Navbar(): React.ReactElement {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="md:h-20 2xl:h-28 w-full bg-[#e9e9e9] backdrop-blur-md  flex items-center justify-between px-24 absolute top-0 z-30 transition duration-300">
      <div className="md:text-2xl 2xl:text-4xl font-bold text-black">
        <Link href="/">AT</Link>
      </div>

      {/* Right - Menu Items */}
      <div className="hidden md:flex space-x-8 text-black md:text-lg 2xl:text-xl">
        <a href="contact" className="hover:text-gray-600">
          Contact
        </a>
        <a href="about" className="hover:text-gray-600">
          About
        </a>
        <a href="journey" className="hover:text-gray-600">
          Journey
        </a>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-24 left-0 w-full bg-[#e9e9e9] flex flex-col items-center space-y-6 py-6 z-50 md:hidden">
          <a
            href="#contact"
            className="text-black text-lg"
            onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a
            href="#about"
            className="text-black text-lg"
            onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a
            href="#journey"
            className="text-black text-lg"
            onClick={() => setMenuOpen(false)}>
            Journey
          </a>
        </div>
      )}
    </nav>
  );
}
