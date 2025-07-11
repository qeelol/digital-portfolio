import { motion } from "framer-motion";
import { FaArrowLeftLong } from "react-icons/fa6";

const PortfolioProjectPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="flex flex-col gap-20 pt-40 pb-30 items-center px-10 bg-blue-900/30 relative"
    >
      <div className="flex gap-2 absolute left-10 top-10 items-center cursor-pointer hover:text-blue-400 transition">
        <FaArrowLeftLong />
        Go Back
      </div>
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-5xl p-3 font-bold text-center bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
          Digital Portfolio
        </h1>
        <p className="text-xl text-blue-100 text-center max-w-[40vw]">
          A place to store and share all my projects and treasured memories. This portfolio showcases my journey, skills, and the work I am most proud of as a software developer.
        </p>
      </div>
      <div className="p-7 bg-black rounded-xl">
        <img src="/projects/portfolio.png" className="max-h-[75vh]" alt="Digital Portfolio Screenshot" />
      </div>
      <div className="mt-6">
        <h2 className="text-3xl font-semibold text-blue-200 mb-2">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-4">
          <span className="bg-blue-800 text-blue-200 px-4 py-2 rounded-full font-semibold">
            Vite
          </span>
          <span className="bg-blue-800 text-blue-200 px-4 py-2 rounded-full font-semibold">
            React
          </span>
          <span className="bg-blue-800 text-blue-200 px-4 py-2 rounded-full font-semibold">
            HTML
          </span>
          <span className="bg-blue-800 text-blue-200 px-4 py-2 rounded-full font-semibold">
            Tailwind
          </span>
          <span className="bg-blue-800 text-blue-200 px-4 py-2 rounded-full font-semibold">
            Framer
          </span>
          <span className="bg-blue-800 text-blue-200 px-4 py-2 rounded-full font-semibold">
            JavaScript
          </span>
        </div>
      </div>
      <div className="mt-6 max-w-[62vw]">
        <h2 className="text-3xl font-semibold text-blue-200 mb-2">
          Reflection
        </h2>
        <p className="text-blue-100 text-lg">
          This digital portfolio is more than just a website—it's a living record of my growth, creativity, and dedication to software development. Building it allowed me to experiment with modern web technologies, refine my design sense, and reflect on the projects and people that have shaped my journey. I hope it inspires others to pursue their passions and create something meaningful.
        </p>
      </div>
    </motion.div>
  );
};

export default PortfolioProjectPage;
