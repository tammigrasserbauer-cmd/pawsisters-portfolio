import { useState } from "react";
import { X, Menu } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white/80 backdrop-blur-sm z-50 shadow-md shadow-pink-200 sticky top-0 ">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-3">
          <a href="/">
            <img
              className="rounded-full w-20"
              src="public\pawsisterslogo.png"
              alt=""
            />
          </a>
          <h1>Pawsisters</h1>
        </div>

        <ul className="hidden md:flex gap-4 text-lg font-medium">
          <li>
            <a
              className="hover:text-purple-500 transition-all duration-300 ease-in-out"
              href="#home"
            >
              Home
            </a>
          </li>

          <li>
            <a
              className="hover:text-purple-500 transition-all duration-300 ease-in-out"
              href="#about"
            >
              About
            </a>
          </li>

          <li>
            <a
              className="hover:text-purple-500 transition-all duration-300 ease-in-out"
              href="#portfolio"
            >
              Portfolio
            </a>
          </li>

          <li>
            <a
              className="hover:text-purple-500 transition-all duration-300 ease-in-out"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden transition-transform duration-300 relative"
        >
          <div
            className={`absolute right-0 -bottom-3.5   transition-transform duration-300 ease-in ${
              isOpen ? "rotate-12 scale-0" : "scale-100 rotate-0"
            }`}
          >
            <Menu size={28} />
          </div>
          <div
            className={` absolute right-0 -bottom-3.5 transition-transform duration-300 ease-in ${
              isOpen ? "rotate-0 scale-100" : "rotate-90 scale-0"
            }`}
          >
            <X size={28} />
          </div>
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden py-3 flex flex-col gap-2 text-lg font-medium">
          <li className="w-fit pl-3">
            <a onClick={() => setIsOpen(false)} href="#home">
              Home
            </a>
          </li>
          <li className="w-fit pl-3">
            <a onClick={() => setIsOpen(false)} href="#about">
              About
            </a>
          </li>
          <li className="w-fit pl-3">
            <a onClick={() => setIsOpen(false)} href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="w-fit pl-3">
            <a onClick={() => setIsOpen(false)} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
