import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#766dff] py-6">
      <div className="flex justify-center items-center gap-10">
        <a
          href="https://www.linkedin.com/in/smmallikharjunkhandavilli"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-[#88f3ff] transition duration-300"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="mailto:mallikharjun7965@gmail.com"
          className="text-white text-2xl hover:text-[#88f3ff] transition duration-300"
        >
          <i className="bi bi-envelope"></i>
        </a>
        <a
          href="tel:+91 8919842383"
          className="text-white text-2xl hover:text-[#88f3ff] transition duration-300"
        >
          <i className="bi bi-phone"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
