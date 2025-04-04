import React from "react";
import LocationComponent from "./LocationComponent";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = (props) => {
  return (
    <div>
      {/* Home Page Container */}
      <div id="home">
        <div className="bg-gradient-to-b from-[#766dff] to-[#88f3ff] w-full h-[150vh]">
          <div className="flex flex-col md:flex-row items-center p-5">
            <img
              src="/image.jpg"
              alt="Sai Manikya"
              className="h-[100vh] w-full md:w-[60%] object-cover p-5"
            />
            <div className="flex-1">
              <p className="text-sm pt-5 pl-5">HELLO EVERYBODY, I AM</p>
              <h1 className="text-2xl pl-5">SAI MANIKYA MALLIKHARJUN</h1>
              <p className="text-sm pt-2 px-5 text-gray-500 font-bold">
                A passionate frontend developer with 4+ years of experience
                building responsive, user-friendly web applications. Skilled in
                React.js, JavaScript, Tailwind CSS, Bootstrap, CSS and HTML. I
                love turning ideas into beautifully crafted, interactive
                experiences. Always learning, always creating.
              </p>

              <div className="flex flex-col justify-center gap-10 pl-5 pt-1">
                <i className="bi bi-house text-2xl text-[#8da7e4]"></i>
                <div className="text-2xl text-gray-500">
                  <LocationComponent />
                </div>
              </div>

              <div className="flex gap-6 pl-5 pt-5">
                <a
                  href="https://github.com/SaiMallikharjun98"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#948ee6]"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github text-[rgb(173,173,237)] text-2xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/smmallikharjunkhandavilli"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#948ee6]"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin text-[rgb(173,173,237)] text-2xl"></i>
                </a>
                <a
                  href="mailto:mallikharjun7965@gmail.com"
                  className="hover:text-[#948ee6]"
                  aria-label="Email"
                >
                  <i className="bi bi-envelope text-[rgb(173,173,237)] text-2xl"></i>
                </a>
                <a
                  href="tel:+91 8919842383"
                  className="hover:text-[#948ee6]"
                  aria-label="Phone"
                >
                  <i className="bi bi-phone text-[rgb(173,173,237)] text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Home Page Container End */}
      {/* About Myself */}
      <About />
      {/* MY skills */}
      <Skills newTechnologiesArray={props.newTechnologiesArray} />
      {/* Portfolio */}
      <Portfolio newProjectsArray={props.newProjectsArray} />
      {/* Contact Form */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
