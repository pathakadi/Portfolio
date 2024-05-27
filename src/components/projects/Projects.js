import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA"
          des="I developed the social app using the MERN stack, with MongoDB for the database, 
          Express.js and Node.js for the backend, and React.js for the frontend. 
          I utilized the 'fetch' API for handling HTTP requests and checked the endpoint using Postman."
          src={projectOne}
          github="https://github.com/pathakadi/Social_App"
          // url={}
        />
        <ProjectsCard
          title="Todo App with Authentication"
          des="I developed a to-do app with authentication using Node.js and Express.js for 
          the backend, MongoDB for data storage, and HTML/CSS/JavaScript for the frontend. ."
          src={projectTwo}
          github="https://github.com/pathakadi/TODOapp_MERN_BACKEND"
          url="https://todo-mern-akp.netlify.app"
        />
        <ProjectsCard
          title="Spotify Clone"
          des="I developed a Spotify clone using HTML, CSS, and JavaScript by first structuring
          the layout and design with HTML and CSS to mirror Spotify's interface. Styling was crucial 
          to emulate Spotify's aesthetic, ensuring a seamless user experience. "
          src={projectThree}
          github="https://github.com/pathakadi/Spotify-Light"
          // url={}
        />
        <ProjectsCard
          title="E-Commerce Website"
          des="I developed an e-commerce website frontend using React.js, creating modular components 
          for UI elements like product cards and navigation bars. CSS was styled using CSS modules or 
          styled-components, focusing on performance optimization and responsive design."
          src={projectFour}
          github="https://github.com/pathakadi/E-Commerce-Frontend"
          // url={}
        />
        <ProjectsCard
          title="Youtube Clone"
          des="I developed a YouTube clone using React and the YouTube API, fetching video data like 
          titles and thumbnails. React components were used to mimic YouTube's interface, featuring 
          video search, playback, and related videos. "
          src={projectFive}
          github="https://github.com/pathakadi/YOUTUBE_CLONE"
          url="https://akp-yt.netlify.app"
        />
        <ProjectsCard
          title="EatRunBurn Game"
          des="Designed and developed an interactive runner game using a tech stack comprising JavaScript, HTML, and CSS.
          Integrated an external food API to dynamically populate the game environment with various food items, each associated
          with distinct calorie values."
          src={projectSix}
          github="https://github.com/pathakadi/A-Survival-Game"
          // url={}
        />
      </div>
    </section>
  );
}

export default Projects