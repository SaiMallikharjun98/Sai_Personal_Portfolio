import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; 

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { to: "home", label: "Home", offset: -300 },
    { to: "about", label: "About", offset: -100 },
    { to: "skills", label: "Skills", offset: -20 },
    { to: "portfolio", label: "Portfolio", offset: -20 },
    { to: "contact", label: "Contact", offset: -10 },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full px-6 py-4 bg-transparent">
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 ml-10">
        {links.map(({ to, label, offset }) => (
          <Link
            key={to}
            to={to}
            smooth={true}
            duration={500}
            offset={offset}
            className="text-white no-underline text-xl font-semibold cursor-pointer hover:text-gray-400 transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <X className="text-white w-6 h-6" />
          ) : (
            <Menu className="text-white w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-4 ml-4">
          {links.map(({ to, label, offset }) => (
            <Link
              key={to}
              to={to}
              smooth={true}
              duration={500}
              offset={offset}
              onClick={() => setIsOpen(false)} // close menu on click
              className="text-white no-underline text-lg font-medium cursor-pointer hover:text-gray-400 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
