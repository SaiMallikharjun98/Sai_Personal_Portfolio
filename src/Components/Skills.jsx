import React from "react";

const Skills = (props) => {
  return (
    <div
      id="skills"
      className="py-10 bg-gradient-to-b from-[#766dff] to-[#88f3ff]"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-10">
          MY SKILLS
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 justify-items-center">
          {props.newTechnologiesArray &&
          props.newTechnologiesArray.length > 0 ? (
            props.newTechnologiesArray.map((tech) => (
              <div
                key={tech.key}
                className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={tech.imageUrl}
                  alt={tech.name}
                  className="w-20 h-20 object-contain mb-2"
                />
                <p className="text-lg font-medium text-gray-800">{tech.name}</p>
              </div>
            ))
          ) : (
            <p className="text-white text-center col-span-full">
              No technologies found!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
