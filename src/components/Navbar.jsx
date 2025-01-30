import React, { useState, useEffect } from "react";
import logo from "../assets/DY.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const sections = [
      "profile",
      "about",
      "tech",
      "certificates",
      "experience",
      "projects",
      "contact",
    ];
    let foundSection = "";

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          foundSection = section;
        }
      }
    });

    setActiveSection(foundSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950 bg-opacity-80 shadow-lg">
        <div className="flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
            <img className="w-10" src={logo} alt="logo" />
          </div>

          {/* Hamburger Menu Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white text-2xl"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-16 left-0 right-0 z-40 bg-neutral-950 bg-opacity-90 lg:static lg:block lg:bg-transparent`}
          >
            <div className="flex flex-col items-start gap-4 p-4 text-xl lg:text-base lg:flex-row lg:items-center lg:justify-center lg:p-0 lg:gap-10">
              <a
                href="#profile"
                className={`hover:text-cyan-500 ${
                  activeSection === "profile" ? "text-cyan-500" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </a>
              <a
                href="#about"
                className={`hover:text-cyan-500 ${
                  activeSection === "about" ? "text-cyan-500" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#tech"
                className={`hover:text-cyan-500 ${
                  activeSection === "tech" ? "text-cyan-500" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Tech
              </a>
              <a
                href="#certificates"
                className={`hover:text-cyan-500 ${
                  activeSection === "certificates" ? "text-cyan-500" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Certificates
              </a>
              <a
                href="#experience"
                className={`hover:text-cyan-500 ${
                  activeSection === "experience" ? "text-cyan-500" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </a>
              <a
                href="#projects"
                className={`hover:text-cyan-500 ${
                  activeSection === "projects" ? "text-cyan-500" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#contact"
                className={`hover:text-cyan-500 ${
                  activeSection === "contact" ? "text-cyan-500" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
