import React, { useState } from "react";
import ThemeProvider from "./ThemeProvder";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/home" },
    { name: "Service", link: "/service" },
    { name: "Contact", link: "/contact" },
    { name: "About us", link: "/about" },
  ];

  function handleNavClick(name) {
    const section = document.getElementById(name.slice(1));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className="dark:bg-orange-50">
      <nav className="container mx-auto max-w-full md:max-w-[80%] px-4 md:px-0 flex justify-between items-center py-1">
        <div className="flex items-center gap-1">
          <img
            width={60}
            src="https://www.rehbarpost.com/assets/img/logo/ShipeezLogo.png"
            alt="Rehbar Post Logo"
          />
          <a href="/" className="text-[1.5rem] font-semibold">
            Rehbar Post
          </a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, idx) => (
            <button
              onClick={(e) => handleNavClick(item.link)}
              key={idx}
              href={item.link}
              className="text-gray-500 p-2 text-sm hover:text-orange-600 hover:underline hover:duration-500"
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-5">
          <ThemeProvider />
          <button
            onClick={() =>
              window.location.replace("http://client.rehbarpost.com/signin")
            }
            className="px-3 py-2 rounded-md text-xs border-[1px] hover:bg-amber-300 duration-300 border-slate-500"
          >
            Sign In
          </button>
          <button
            onClick={() =>
              window.location.replace("http://client.rehbarpost.com/sign-up")
            }
            className="px-3 py-2 text-white bg-black rounded-md text-xs border-[1px] hover:bg-amber-500 duration-300 border-slate-500"
          >
            Sign Up
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <FaTimes size={24} className="text-gray-600" />
            ) : (
              <FaBars size={24} className="text-gray-600" />
            )}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800  dark:bg-white shadow-md">
          <div className="flex flex-col items-center gap-4 py-4">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="text-gray-500 text-sm hover:text-gray-800"
              >
                {item.name}
              </a>
            ))}
            <ThemeProvider />
            <button className="px-3 py-2 rounded-md text-xs border-[1px] border-slate-500">
              Sign In
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default NavBar;
