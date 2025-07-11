import { motion } from "framer-motion";
import { FaArrowLeftLong } from "react-icons/fa6";

const VelvetOasisHotelProjectPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="flex flex-col gap-20 pt-40 pb-30 items-center px-10 bg-purple-900/30 relative"
    >
      <div className="flex gap-2 absolute left-10 top-10 items-center cursor-pointer hover:text-purple-400 transition">
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
        <img src="/projects/velvetoasis.png" className="max-h-[75vh]" alt="Velvet Oasis Hotel Project Screenshot" />
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
