import React from 'react'
import Project1 from "../assets/images/Project1.png"
import Project2 from "../assets/images/Project2.png"
import Project3 from "../assets/images/Project3.png"
// import React from 'react'
// import Project1 from "../assets/images/Project1.png"
// import Project2 from "../assets/images/Project2.png"
// import Project3 from "../assets/images/Project3.png"

// function Project() {
//   return (
//     <>
//       <div name="Project"
//         className="max-w-screen-2xl container mx-auto px-4 md:px-20 bg-green-100 pt-20 pb-20 text-black py-10 " >
//         <div>
//           <h1 className="text-3xl font-bold mb-10 text-center ">Projects</h1>
//           <span className="font-semibold items-center justify-center flex">👉 Here are my recent project with links and source code</span>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-3 py-10">

//             <div className="md:w-[350px] md:h-[300px] border-[2px] rounded-lg  cursor-pointer bg-blue-300 hover:scale-110 hover:bg-white-500 duration-300" >
//               <div className="">
//                 <img src={Project1} alt="project1" />
//               </div>
//               <div className="px-2 text-xl text-center py-2">
//                 <span className="p-2">node</span>
//                 <span className="p-2">react </span>
//                 <span className="p-2">express</span>
//                 <span className="p-2">mongodb</span>
//                 <div className="">
//                   <div className="pb-5">
//                     <h5 className="">ChatApp</h5>
//                   </div >
//                   <a className="ad-btn px-2 font-bold text-xl mb-2 text-center py-1 px-5 border-[1px] rounded-lg bg-blue-100 hover:bg-yellow-200 duration-300" href="https://github.com/ShreyaGupta-3/chatapp">View</a>
//                 </div>
//               </div>

              
//             </div>

//           </div>
//         </div>

//       </div>
//     </>
//   )
// }

// export default Project


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
      tags: ["node", "react", "express", "mongodb"],
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
              <div className="px-2 text-xl text-center py-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="p-2">
                    {tag}
                  </span>
                ))}
                <div className="pb-5">
                  <h5>{project.title}</h5>
                </div>
                <a
                  className="ad-btn px-2 font-bold text-xl mb-2 text-center py-1 px-5 border-[1px] rounded-lg bg-blue-100 hover:bg-yellow-200 duration-300"
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