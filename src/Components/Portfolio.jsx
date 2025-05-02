import React from "react";

const Portfolio = (props) => {
  return (
    <div id="portfolio" className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-[#333] mb-10">
          MY PROJECTS
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {props.newProjectsArray && props.newProjectsArray.length > 0 ? (
            props.newProjectsArray.map((project, index) => (
              <div
                key={project.id || index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <p className="text-center text-lg font-semibold py-3 text-gray-800">
                  {project.name}
                </p>
              </div>
            ))
          ) : (
            <p className="text-white text-center">No Projects</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
