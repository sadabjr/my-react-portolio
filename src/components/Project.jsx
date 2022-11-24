import React from "react";
import Crypto from '../assets/project/Crypto thumb.png'
import Portflio from '../assets/project/PortfolioThumb.png'
import NetflixClone from '../assets/project/Netflixthumb.jpg';
import JsQuizApp from '../assets/project/Js Quiz App thumb.jpg'

const Project = () => {
  const projects = [
    {
      id: 1,
      src: Crypto,
      urlDemo: "https://xcrypto-app.vercel.app/",
      urlGit: "https://github.com/sadabjr/Xcrypto-App",
    },
    {
      id: 2,
      src: Portflio,
      urlDemo: "https://portfolio-website-using-reactjs.vercel.app/",
      urlGit: "https://github.com/sadabjr/portfolio-website-using-reactjs",
    },
    {
      id: 3,
      src: NetflixClone,
      urlDemo: "https://netflix-clone-using-firebase-and-google-authentication.vercel.app/",
      urlGit: "https://github.com/sadabjr/Netflix-clone-Using-firebase-and-google-authentication",
    },
    {
      id: 4,
      src: JsQuizApp,
      urlDemo: "https://react-modern-quizz-app-lime.vercel.app/",
      urlGit: "https://github.com/sadabjr/React-Modern-QuizzApp",
    },
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, urlDemo, urlGit }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                target="_blank"
                  href={urlDemo}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  rel="noreferrer">
                  Demo
                </a>
                <a target="_blank" href={urlGit} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" rel="noreferrer">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
