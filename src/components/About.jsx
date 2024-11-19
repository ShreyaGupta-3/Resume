import React from "react";

function About() {
    return (
        <div
            name="About"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 pt-20"
        >
            <div>
                <h1 className="text-3xl font-bold mb-10 ">About Me</h1>
                <p>
                    Hi, I'm Shreya Gupta , a dedicated and resutls-driven Full-Stack Developer with a passion for creating intuitive, efficient, and scalable web applications. With experties spanning both front-end and back-end development, I thrive on turning complex problems into elegant digital solutions.
                    <br />
                    From designing responsive user interfaces to implementing robust server-side logic. My goal is to build applications that deliver seamless user experiences while maintaining high performance and reliability.
                </p>
                <br />
                <br />
                <h1 className="text-green-600 font-semibold text-xl">
                    Skills & Expertise
                </h1>
                <span>

                    Proficient in creating interactive user interfaces using React.js.Understanding of React lifecycle methods, hooks, and functional components.Experience with state management libraries (Redux, Context API, Zustand, etc.).Strong skills in HTML5, CSS3, and JavaScript (ES6+).
                    Familiarity with frontend frameworks like Material-UI, Bootstrap, or Tailwind CSS.Proficient in responsive design and cross-browser compatibility.
                    <br />
                    Expertise in building RESTful APIs using Node.js and Express.js.Middleware integration for authentication, logging, and error handling.Hands-on experience with authentication (JWT, OAuth, etc.).Proficient in working with server-side rendering and templating engines (e.g., EJS, Handlebars).
                    Knowledge of file handling, streams, and event-driven architecture in Node.js.
                    <br />
                    Proficient in schema design and database modeling.Experience with CRUD operations, aggregations, and indexing for optimization.Knowledge of MongoDB Atlas for cloud-based database solutions.
                    Understanding of Mongoose for schema-based modeling in Node.js.

                </span>
                <br />
                <br />
                <h1 className="pt-10 text-3xl font-bold mb-5 ">Contact Details</h1>
              <div className="contact-details">
                <div className="contact-info">
                  <p>Shreya Gupta</p>
                  <p>Lucknow ,INDIA.</p>
                  <p>8090929228</p>
                  <p>juhig8500@gmail.com</p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default About;