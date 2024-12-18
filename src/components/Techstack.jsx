import React from "react";
// import {SiBootstrap, SiCss3, SiExpress, SiHtml5, SiJavascript, SiMongodb, SiReact, SiTailwindcss, } from "react-icons/si";
// import { FaNodeJs } from "react-icons/fa"

function Techstack() {
  const cardItem = [
    {
        _id: 1,
        name: "HTML",
        // icon: SiHtml5,
    },
    {
        _id: 2,
        name: "CSS",
        // icon: SiCss3,
    },
    {
        _id: 3,
        name: "REACT JS",
        // icon: SiReact,
    },
    {
        _id: 4,
        name: "NODE JS",
        // icon: FaNodeJs,
    },
    {
        _id: 5,
        name: "EXPRESS JS",
        // icon: SiExpress,
    },
    {
        _id: 6,
        name: "MONGODB",
        // icon: SiMongodb,
    },
    {
        _id: 7,
        name: "BOOTSTRAP",
        // icon: SiBootstrap,
    },
    {
        _id: 8,
        name: "TAILWINDCSS",
        // icon: SiTailwindcss,
    },

  ];
  return (
    <div name="Techstack"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 bg-slate-800 text-white py-10 " >
      <div>
        <h1 className="text-3xl font-bold mb-10 text-center">Technologies Stack</h1>
        <span className="font-semibold items-center justify-center flex">👉 Including programming Languages, frameworks, databases, front-end, back-end tools and APIs</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 py-10">
          {cardItem.map(({ id, name, icon }) => (
            <div
              className="md:w-[250px] md:h-[60px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 hover:bg-pink-500 duration-300"
              key={id}
            >
         
              <div>
                <div className="px-2 font-bold text-xl mb-2 text-center py-2">{name}</div>
                
              </div>
              
              
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default Techstack;