import { motion } from "framer-motion";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const VelvetOasisHotelProjectPage = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="flex flex-col gap-20 pt-40 pb-30 items-center px-10 bg-purple-900/30 relative"
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
          Velvet Oasis Hotel
        </h1>
        <p className="text-xl text-purple-100 text-center max-w-[40vw]">
          Design of a fictional hotel for my UX design project. Velvet Oasis Hotel is a concept that blends luxury, comfort, and modern aesthetics, created to showcase my skills in user experience and interface design.
        </p>
        <motion.div whileHover={{ scale: 1.1 }}>
          <a
            className="bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 p-4 px-8 rounded-lg flex gap-3 items-center font-semibold text-white text-lg cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.figma.com/proto/gB2f1VcsyeYjfZHPTvcg6B/241481D_Velvet_Oasis_Hotel?page-id=0%3A1&node-id=145-1748&p=f&viewport=616%2C41%2C0.02&t=EdzRdKgA1kqoXfPk-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=233%3A27182"
          >
            Live Demo
          </a>
        </motion.div>
      </div>
      <div className="p-7 bg-black rounded-xl">
        <img src="/digital-portfolio//projects/velvetoasis.png" className="max-h-[75vh]" alt="Velvet Oasis Hotel Project Screenshot" />
      </div>
      <div className="mt-6 max-w-[62vw] text-purple-100">
        <h2 className="text-3xl font-semibold text-purple-200 mb-6 text-center">
          Design & Development Process
        </h2>
        <div className="flex flex-col gap-14">

          <div>
            <h3 className="text-2xl font-bold text-purple-300 mb-4">1. Research & Discovery</h3>
            <ul className="list-disc pl-6 space-y-8 text-lg">
              <li>
                <span className="font-semibold text-purple-200">Competitor Analysis:</span> Analyzed existing hotel websites and booking platforms to identify industry best practices, common user flows, and areas for differentiation.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-purple-300 mb-4">2. Information Architecture & Wireframing</h3>
            <ul className="list-disc pl-6 space-y-8 text-lg">
              <li>
                <span className="font-semibold text-purple-200">Sitemap Creation:</span> Defined the hierarchical structure of the website, outlining all key pages and their relationships.
              </li>
              <li>
                <span className="font-semibold text-purple-200">User Flows:</span> Mapped out critical user journeys, such as booking a room or checking in, to ensure intuitive navigation and minimize friction.
              </li>
              <li>
                <span className="font-semibold text-purple-200">Low-Fidelity Wireframes:</span> Sketched basic layouts for each page, focusing on content placement and functionality without visual details.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-purple-300 mb-4">3. Visual Design & Prototyping</h3>
            <ul className="list-disc pl-6 space-y-8 text-lg">
              <li>
                <span className="font-semibold text-purple-200">High-Fidelity Mockups:</span> Designed detailed visual interfaces for all key screens, incorporating branding elements and ensuring pixel-perfect execution.
              </li>
              <li>
                <span className="font-semibold text-purple-200">Interactive Prototyping:</span> Created clickable prototypes to simulate user interaction and validate design decisions before development.
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
          Creating Velvet Oasis Hotel allowed me to explore the principles of user experience and interface design in a real-world context. I focused on crafting a seamless, visually appealing experience that would delight users and meet business goals. This project strengthened my design thinking and attention to detail, and I am excited to apply these skills to future challenges.
        </p>
      </div>
    </motion.div>
  );
};

export default VelvetOasisHotelProjectPage;
