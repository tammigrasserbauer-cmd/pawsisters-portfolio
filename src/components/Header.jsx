import { useState } from "react";
import { X, Menu } from "lucide-react";
import { useNavigate } from "react-router";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  return (
    <header className="bg-white/80 backdrop-blur-sm z-50 shadow-md shadow-pink-200 sticky top-0 ">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-3">
          <a href="/">
            <img
              className="rounded-full w-20"
              src="/pawsisterslogo.png"
              alt=""
            />
          </a>
          <h1>Pawsisters</h1>
        </div>

        <ul className="hidden md:flex gap-4 text-lg font-medium">
          <li>
            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document
                    .getElementById("home")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="hover:text-purple-500 transition-all duration-300 ease-in-out cursor-pointer"
            >
              Home
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="hover:text-purple-500 transition-all duration-300 ease-in-out cursor-pointer"
            >
              About
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="hover:text-purple-500 transition-all duration-300 ease-in-out cursor-pointer"
            >
              Portfolio
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="hover:text-purple-500 transition-all duration-300 ease-in-out cursor-pointer"
            >
              Contact
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                navigate("/gallery");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:text-purple-500 transition-all duration-300 ease-in-out"
            >
              Gallery
            </button>
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
            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document
                    .getElementById("home")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }, 100);
              }}
            >
              Home
            </button>
          </li>
          <li className="w-fit pl-3">
            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }, 100);
              }}
            >
              About
            </button>
          </li>
          <li className="w-fit pl-3">
            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }, 100);
              }}
            >
              Portfolio
            </button>
          </li>

          <li className="w-fit pl-3">
            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }, 100);
              }}
            >
              Contact
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                navigate("/gallery");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-fit pl-3"
            >
              Gallery
            </button>
          </li>
        </ul>
      )}
    </header>
  );
}
