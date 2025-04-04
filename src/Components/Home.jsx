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
      {/* Home Section Background */}
      <div id="home" className="h-auto min-h-[80px] pt-4 px-4">
        {/* Floating Card */}
        <div className="bg-white w-[80%] mx-auto rounded-lg shadow-2xl relative z-10">
          <div className="flex flex-col md:flex-row items-center p-6">
            {/* Image */}
            <img
              src="/image.jpg"
              alt="Sai Manikya"
              className="h-[350px] md:h-[500px] w-full md:w-[50%] object-cover rounded-lg"
            />

            {/* Content */}
            <div className="flex-1 md:pl-8">
              <p className="text-sm pt-5">HELLO EVERYBODY, I AM</p>
              <h1 className="text-2xl md:text-3xl font-bold">
                SAI MANIKYA MALLIKHARJUN
              </h1>
              <p className="text-base pt-4">
                A passionate frontend developer with 4+ years of experience
                building responsive, user-friendly web applications. Skilled in
                React.js, JavaScript, Tailwind CSS, Bootstrap, CSS and HTML. I
                love turning ideas into beautifully crafted, interactive
                experiences. Always learning, always creating.
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 mt-4">
                <i className="bi bi-house text-xl text-blue-600"></i>
                <LocationComponent />
              </div>

              {/* Social Icons */}
              <div className="flex gap-6 mt-5">
                <a
                  href="https://github.com/SaiMallikharjun98"
                  target="_blank"
                  rel="noreferrer"
                  className="text-3xl text-gray-700 hover:text-blue-500"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/smmallikharjunkhandavilli"
                  target="_blank"
                  rel="noreferrer"
                  className="text-3xl text-gray-700 hover:text-blue-500"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href="mailto:mallikharjun7965@gmail.com"
                  className="text-3xl text-gray-700 hover:text-blue-500"
                >
                  <i className="bi bi-envelope"></i>
                </a>
                <a
                  href="tel:+91 8919842383"
                  className="text-3xl text-gray-700 hover:text-blue-500"
                >
                  <i className="bi bi-phone"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sections Below */}
      <About />
      <Skills newTechnologiesArray={props.newTechnologiesArray} />
      <Portfolio newProjectsArray={props.newProjectsArray} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
