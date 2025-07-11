import { motion } from "framer-motion";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const PortfolioProjectPage = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="flex flex-col gap-20 pt-40 pb-30 items-center px-10 bg-blue-900/30 relative"
    >
      <div 
      onClick={(e) => {
        e.stopPropagation();
        navigate("/projects");
      }}
      className="flex gap-2 absolute left-10 top-30 items-center cursor-pointer hover:text-blue-400 transition"
      >
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
        <img src="/digital-portfolio//projects/portfolio.png" className="max-h-[75vh]" alt="Digital Portfolio Screenshot" />
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

      <div className="mt-6 max-w-[62vw] text-purple-100">
        <h2 className="text-3xl font-semibold text-blue-200 mb-6 text-center">
          Design & Development Process
        </h2>
        <div className="flex flex-col gap-14">
          <div>
            <h3 className="text-2xl font-bold text-blue-300 mb-2">1. Conceptualization & Planning</h3>
            <ul className="list-disc pl-6 text-lg space-y-4">
              <li>
                <span className="font-semibold text-blue-200">Defining the Core Purpose:</span> Started by outlining what the portfolio needed to achieve: showcasing projects, highlighting skills, and providing a personal touch.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-300 mb-2">2. Design & User Experience (UX)</h3>
            <ul className="list-disc pl-6 text-lg space-y-8">
              <li>
                <span className="font-semibold text-blue-200">Wireframing & Layout:</span> Sketched out basic layouts for key pages, focusing on intuitive navigation and content flow with Figma.
              </li>
              <li>
                <span className="font-semibold text-blue-200">Visual Design & Branding:</span> Decided on a color pallete.
              </li>
              <li>
                <span className="font-semibold text-blue-200">Animation Strategy:</span> Planned subtle animations to enhance user engagement without being distracting.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-300 mb-2">3. Development & Implementation</h3>
            <ul className="list-disc pl-6 text-lg space-y-8">
              <li>
                <span className="font-semibold text-blue-200">Core Technologies:</span> Built the front-end using React.js for component-based architecture, Vite for a fast development experience, and TypeScript for robust type safety.
              </li>
              <li>
                <span className="font-semibold text-blue-200">Styling with Tailwind CSS:</span> Leveraged Tailwind CSS for rapid and consistent styling, allowing for highly customizable designs directly in JSX. Implemented gradient texts and subtle background effects.
              </li>
              <li>
                <span className="font-semibold text-blue-200">Interactive Elements:</span> Integrated Framer Motion for smooth page transitions and interactive elements, adding a polished feel to the user experience.
              </li>
              <li>
                <span className="font-semibold text-blue-200">Component-Driven Development:</span> Broke down the UI into small, reusable components (e.g., `ProjectCard`, `TechStackBadge`) to improve modularity and maintainability.
              </li>
              <li>
                <span className="font-semibold text-blue-200">Version Control:</span> Utilized Git and GitHub for version control, and deploying updates via GitHub Pages.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-300 mb-2">4. Testing & Iteration</h3>
            <ul className="list-disc pl-6 text-lg space-y-8">
              <li>
                <span className="font-semibold text-blue-200">Browser Compatibility:</span> Tested across different browsers to ensure consistent rendering and functionality.
              </li>
              <li>
                <span className="font-semibold text-blue-200">Interactive Elements:</span> Tested every single interactive element.
              </li>
            </ul>
          </div>
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
