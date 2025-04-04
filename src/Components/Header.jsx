import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";

const Header = () => {
  const [name, setName] = useState("Sai");

  const handler = () => {
    setName("Sai Manikya Mallikharjun");
  };

  const roles = [
    "SOFTWARE DEVELOPER",
    "FRONT END DEVELOPER",
    "REACT JS DEVELOPER",
    "WEB DEVELOPER",
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  });

  return (
    <div className="bg-gradient-to-b from-[#766dff] to-[#88f3ff] w-full h-[150vh]">
      {/* Header with fixed top navbar */}
      <div className="flex fixed top-0 bg-gradient-to-t from-[#766dff] to-[#88f3ff] z-[1000] w-full items-center justify-between px-10 py-2">
        <h2 className="text-3xl text-white cursor-pointer" onClick={handler}>
          {name}
        </h2>

        <nav>
          <Navigation />
        </nav>
      </div>

      {/* Rotating Role Text */}
      <div className="flex justify-center items-center">
        <h1 className="text-[60px] font-bold text-center text-[rgb(220,221,235)]">
          {roles[roleIndex]}
        </h1>
      </div>
    </div>
  );
};

export default Header;
