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
      <div id="home" className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 min-h-screen p-4">
        <div className="bg-white w-[90%] mx-auto mt-[100px] rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center p-6">
            {/* Profile Image */}
            <img
              src="/image.jpg"
              alt="Sai Manikya"
              className="h-[300px] md:h-[500px] w-full md:w-[50%] object-cover rounded-lg"
            />

            {/* Text Section */}
            <div className="flex-1 text-gray-800 md:pl-8">
              <p className="text-sm pt-5">HELLO EVERYBODY, I AM</p>
              <h1 className="text-2xl font-bold">SAI MANIKYA MALLIKHARJUN</h1>
              <p className="text-base pt-4">
                A passionate frontend developer with 4+ years of experience
                building responsive, user-friendly web applications. Skilled in
                React.js, JavaScript, Tailwind CSS, Bootstrap, CSS, and HTML. I
                love turning ideas into beautifully crafted, interactive
                experiences. Always learning, always creating.
              </p>

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
                  className="hover:text-blue-500 text-gray-800"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github text-2xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/smmallikharjunkhandavilli"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-500 text-gray-800"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin text-2xl"></i>
                </a>
                <a
                  href="mailto:mallikharjun7965@gmail.com"
                  className="hover:text-blue-500 text-gray-800"
                  aria-label="Email"
                >
                  <i className="bi bi-envelope text-2xl"></i>
                </a>
                <a
                  href="tel:+91 8919842383"
                  className="hover:text-blue-500 text-gray-800"
                  aria-label="Phone"
                >
                  <i className="bi bi-phone text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Home Page Container End */}

      {/* About Myself */}
      <About />

      {/* My Skills */}
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
