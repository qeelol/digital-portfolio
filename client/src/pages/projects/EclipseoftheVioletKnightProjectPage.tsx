import { motion } from "framer-motion";
import { FaArrowLeftLong } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const EclipseoftheVioletKnightProjectPage = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="flex flex-col gap-20 pt-40 pb-30 items-center px-10 bg-purple-950/30 relative"
    >
      <div 
      onClick={(e) => {
        e.stopPropagation();
        navigate("/projects");
      }}
      className="flex gap-2 absolute left-10 top-30 items-center cursor-pointer hover:text-purple-400 transition">
        <FaArrowLeftLong />
        Go Back
      </div>
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-5xl p-3 font-bold text-center bg-gradient-to-r from-purple-300 via-purple-400 to-purple-600 bg-clip-text text-transparent">
          Eclipse of the Violet Knight
        </h1>
        <p className="text-xl text-purple-100 text-center max-w-[40vw]">
          A short Metroidvania game for my first ever web development project. This game was a fun and challenging way to learn about game mechanics, JavaScript, and web design.
        </p>
        <motion.div whileHover={{ scale: 1.1 }}>
          <a
            className="bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 p-4 px-8 rounded-lg flex gap-3 items-center font-semibold text-white text-lg cursor-not-allowed"
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            title="Sorry for the inconvenience, please check again later!"
          >
            Live Demo Unavailable
          </a>
        </motion.div>
      </div>
      <div className="p-7 bg-black rounded-xl">
        <img src="/digital-portfolio//projects/violetknight.png" className="max-h-[75vh]" alt="Eclipse of the Violet Knight Screenshot" />
      </div>
      <div className="mt-6">
        <h2 className="text-3xl font-semibold text-purple-200 mb-2">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-4">
          <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full font-semibold">
            HTML
          </span>
          <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full font-semibold">
            CSS
          </span>
          <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full font-semibold">
            JavaScript
          </span>
        </div>
      </div>
      <div className="mt-6 max-w-[62vw] text-purple-100">
        <h2 className="text-3xl font-semibold text-purple-200 mb-6 text-center">
          Design & Development Process
        </h2>
        <div className="flex flex-col gap-14">
          <div>
            <h3 className="text-2xl font-bold text-purple-300 mb-2">1. Game Concept & Planning</h3>
            <ul className="list-disc pl-6 text-lg space-y-8">
              <li>
                <span className="font-semibold text-purple-200">Genre & Scope</span>: Defined the Metroidvania genre and set a manageable project size.
              </li>
              <li>
                <span className="font-semibold text-purple-200">Core Mechanics</span>: Planned movement, combat, and progression systems.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-purple-300 mb-2">2. Design & Art</h3>
            <ul className="list-disc pl-6 text-lg space-y-8">
              <li>
                <span className="font-semibold text-purple-200">Curate Assets</span>: Searched for open source and royalty-free assets.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-purple-300 mb-2">3. Development</h3>
            <ul className="list-disc pl-6 text-lg space-y-8">
              <li>
                <span className="font-semibold text-purple-200">HTML Canvas & Rendering</span>: Used canvas for drawing game graphics and backgrounds.
              </li>
              <li>
                <span className="font-semibold text-purple-200">JavaScript Game Loop</span>: Implemented the main loop for updates and rendering.
              </li>
              <li>
                <span className="font-semibold text-purple-200">Collision Detection</span>: Handled player, enemy, and environment interactions.
              </li>
              <li>
                <span className="font-semibold text-purple-200">Player Controls</span>: Enabled keyboard input for movement and actions.
              </li>
              <li>
                <span className="font-semibold text-purple-200">Enemy & Object Logic</span>: Programmed enemy behaviors and collectible items.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-purple-300 mb-2">4. Testing & Iteration</h3>
            <ul className="list-disc pl-6 text-lg space-y-8">
              <li>
                <span className="font-semibold text-purple-200">Playtesting</span>: Played through the game to find issues and improve flow.
              </li>
              <li>
                <span className="font-semibold text-purple-200">Bug Fixing</span>: Identified and resolved gameplay and technical bugs.
              </li>
              <li>
                <span className="font-semibold text-purple-200">Balancing Difficulty</span>: Adjusted enemy strength and level design for fair challenge.
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-6 max-w-[62vw]">
        <h2 className="text-3xl font-semibold text-purple-200 mb-2">
          Reflection
        </h2>
        <p className="text-purple-100 text-lg">
          Building Eclipse of the Violet Knight was my introduction to web game development. I learned about collision detection, sprite animation, and user interaction, all while having fun creating a game world. This project sparked my interest in both game design and front-end development.
        </p>
      </div>

      <motion.div
        className="mt-10 flex flex-col items-center"
        whileHover={{ scale: 1.1 }}
      >
        <a
          href="https://github.com/qeelol/Eclipse-of-the-Violet-Knight"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 p-4 px-8 rounded-lg 
                flex items-center gap-2 font-semibold text-lg text-white transition"
        >
          <SiGithub className="text-2xl" />
          View on GitHub
        </a>
      </motion.div>
    </motion.div>
  );
};

export default EclipseoftheVioletKnightProjectPage;
