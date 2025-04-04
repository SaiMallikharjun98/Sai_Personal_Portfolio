import React from "react";
import { Link } from "react-scroll";

const Navigation = () => {
  const links = [
    { to: "home", label: "Home", offset: 0 },
    { to: "about", label: "About", offset: -100 },
    { to: "skills", label: "Skills", offset: -20 },
    { to: "portfolio", label: "Portfolio", offset: -20 },
    { to: "contact", label: "Contact", offset: -10 },
  ];

  return (
    <nav className="flex mt-3 ml-10 gap-4">
      {links.map(({ to, label, offset }) => (
        <Link
          key={to}
          to={to}
          smooth={true}
          duration={500}
          offset={offset}
          className="text-white no-underline text-2xl font-bold cursor-pointer hover:text-gray-500 transition-colors"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
