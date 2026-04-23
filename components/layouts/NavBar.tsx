"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuChevronDown, LuUser, LuMenu, LuX } from "react-icons/lu";

const navItems = [
  { label: "About", href: "/", hasDropdown: true },
  { label: "What We Do", href: "/", hasDropdown: true },
  { label: "Jobs", href: "/", hasDropdown: true },
  { label: "Projects", href: "/", hasDropdown: false },
  { label: "TG Academy", href: "/", hasDropdown: false },
  { label: "Strategic Partnership", href: "/", hasDropdown: false },
  { label: "Pricing", href: "/", hasDropdown: false },
  { label: "Book a Consultation", href: "/", hasDropdown: false },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${isOpen ? "sticky" : ""} top-0 z-50 bg-white`}>
      <div className="">
        <div className="flex justify-between pt-4.5 pb-4 px-4 lg:px-16 lg:py-6 items-center">
          <div>
            <Link href="/">
              <Image
                alt="tobams_logo"
                src="/images/tobams.png"
                width={150}
                height={150}
              />
            </Link>
          </div>

          <div className="">
            <div className="gap-4 items-center hidden lg:flex md:hidden sm:hidden">
              <div>
                <Link href="/" className="">
                  <button className="cursor-pointer flex items-center bg-primary py-2.5 px-5 text-white rounded-sm">
                    <span className="bg-[#ddd0da] p-1 rounded-full mr-2">
                      {/* <LuUser className="inline mr-2 p-3" /> */}
                      <LuUser className="text-primary" />
                    </span>
                    Account
                    <LuChevronDown className="inline ml-2" />
                  </button>
                </Link>
              </div>
              <div>
                <Link href="/" className="">
                  <button className="cursor-pointer bg-secondary px-5 py-2.5 text-white rounded-sm">
                    Take Assessment
                  </button>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden md:flex sm:flex bg-black p-1 rounded-sm">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer"
              >
                {isOpen ? (
                  <LuX className="text-2xl" color="white" />
                ) : (
                  <LuMenu className="text-2xl" color="white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* NavItems */}
        <div className="border-t border-gray-300 border px-16 py-8 hidden lg:flex md:hidden sm:hidden items-center justify-center gap-5 md:text-sm font-normal">
          {navItems.map((item, index) => (
            <div key={index}>
              <Link href={item.href}>
                {item.label}
                {item.hasDropdown && <LuChevronDown className="inline ml-1" />}
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed top-23 left-0 right-0 bottom-0 z-50 w-full bg-background-dark px-4 py-16 text-lg">
            <div className="h-screen flex flex-col gap-3 md:hidden">
              {navItems.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="px-2 py-1 text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <LuChevronDown className="inline ml-1" />
                    )}
                  </Link>
                );
              })}

              <Link href="/" className="">
                <button className="cursor-pointer flex items-center bg-primary py-2 md:py-2.5 px-5  text-white rounded-sm">
                  <span className="bg-[#ddd0da] p-1 rounded-full mr-2">
                    {/* <LuUser className="inline mr-2 p-3" /> */}
                    <LuUser className="text-primary" />
                  </span>
                  Account
                  <LuChevronDown className="inline ml-2" />
                </button>
              </Link>

              <Link href="/" className="">
                <button className="cursor-pointer bg-secondary px-5 py-2.5 text-white rounded-sm">
                  Take Assessment
                </button>
              </Link>
              {/* </div> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default NavBar;
