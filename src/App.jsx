import Home from "./Components/Home";
import Header from "./Components/Header";

function App() {
  const technologies = [
    { id: 1, name: "HTML5", imageUrl: "/html-5.png" },
    { id: 2, name: "CSS3", imageUrl: "/css.png" },
    { id: 3, name: "Bootstrap", imageUrl: "/bootstrap.png" },
    { id: 4, name: "Tailwind CSS", imageUrl: "/icons8-tailwind-css-48.png" },
    { id: 5, name: "JavaScript", imageUrl: "/javascript.png" },
    { id: 6, name: "React JS", imageUrl: "/react.svg" },
  ];

  const projects = [
    { id: 1, name: "Pest Control Hyderabad", imageUrl: "/pch.png" },
    { id: 2, name: "Medlife Pharma", imageUrl: "/medlifepharma.jpeg" },
    { id: 3, name: "Sunwaso", imageUrl: "/sunwaso.png" },
    { id: 4, name: "Singapore Airlines", imageUrl: "/singapore-air-lines.png" },
    { id: 5, name: "Weather App", imageUrl: "/weather_app.png" },
    { id: 6, name: "Portfolio", imageUrl: "/portfolio.jpeg" },
  ];

  const newTechnologiesArray = technologies.map((tech) => ({
    key: tech.id,
    name: tech.name,
    imageUrl: tech.imageUrl,
  }));

  const newProjectsArray = projects.map((project) => ({
    key: project.id,
    name: project.name,
    imageUrl: project.imageUrl,
    skills: project.skills || [],
  }));

  return (
    <>
      <Header />
      <Home
        newTechnologiesArray={newTechnologiesArray}
        newProjectsArray={newProjectsArray}
      />
    </>
  );
}

export default App;
