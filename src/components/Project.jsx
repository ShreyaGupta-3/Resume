import React from 'react'
import Project1 from "../assets/images/Project1.png";
import Project2 from "../assets/images/Project2.png";
import Project3 from "../assets/images/Project3.png";

function Project() {
  const projects = [
    {
      title: "ChatApp",
      image: Project1,
      tags: ["node", "react", "express", "mongodb"],
      link: "https://github.com/ShreyaGupta-3/chatapp",
    },
    {
      title: "TextGenerator",
      image: Project2,
      tags: ["node", "react", "express", "get.form.io"],
      link: "https://github.com/ShreyaGupta-3/textgenerator",
    },
    {
      title: "BookStore Website",
      image: Project3,
      tags: ["node", "react", "express", "mongodb"],
      link: "https://github.com/ShreyaGupta-3/Bookstore",
    },
  ];

  return (
    <section
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 bg-green-100 pt-20 pb-20 text-black"
    >
      <div>
        <h1 className="text-3xl font-bold mb-10 text-center">Projects</h1>
        <span className="font-semibold items-center justify-center flex">
          👉 Here are my recent projects with links and source code
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-20 px-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="md:w-[350px] md:h-[300px] border-[2px] rounded-lg cursor-pointer bg-blue-300 hover:scale-110 hover:bg-white-500 duration-300"
            >
              <div>
                <img
                  src={project.image}
                  alt={`${project.title} project thumbnail`}
                />
              </div>
              <div className="px-2 text-center space-x-2 py-5">
                {project.tags.map((tag, i) => (
                  <span key={i} className="p-1 rounded-lg bg-green-200">
                    {tag}
                  </span>
                ))}
                <div className="pb-5 pt-1 font-bold text-xl">
                  <h5>{project.title}</h5>
                </div>
                <a
                  className="ad-btn px-2 font-bold text-xl mb-2 text-center py-1 px-5 border-[2px] rounded-lg bg-yellow-200 hover:bg-blue-100 duration-300"
                  href={project.link}
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;