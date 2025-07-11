import { motion } from "framer-motion";
import { FaArrowLeftLong } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

const RewwwindProjectPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="flex flex-col gap-20 pt-40 pb-30 items-center px-10 bg-green-900/30 relative"
    >
      <div className="flex gap-2 absolute left-10 top-30 items-center cursor-pointer hover:text-green-400 transition">
        <FaArrowLeftLong />
        Go Back
      </div>
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-5xl p-3 font-bold text-center bg-gradient-to-r from-green-300 via-green-400 to-green-600 bg-clip-text text-transparent">
          Rewwwind: Vinyl and Books
        </h1>
        <p className="text-xl text-green-100 text-center max-w-[40vw]">
          Want to stock up on your collection of vinyl and books while remaining eco-friendly? Look no further than Rewwwind! This project was built to promote sustainability and a love for music and reading.
        </p>
        <motion.div
          whileHover={{ scale: 1.1 }}
        >
          <a
            className="bg-gradient-to-r from-green-500 via-green-700 to-green-900 p-4 px-8 rounded-lg 
                  flex gap-3 items-center font-semibold text-white text-lg cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            href="https://rewwwind.onrender.com/"
          >
            Live Page
          </a>
        </motion.div>
      </div>
      <div className="p-7 bg-black rounded-xl">
        <img src="/digital-portfolio//projects/rewwwind.png" className="max-h-[75vh]" alt="Rewwwind Project Screenshot" />
      </div>
      <div className="mt-6">
        <h2 className="text-3xl font-semibold text-green-200 mb-2">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-4 max-w-[62vw]">
          <span className="bg-green-800 text-green-200 px-4 py-2 rounded-full font-semibold">
            Flask
          </span>
          <span className="bg-green-800 text-green-200 px-4 py-2 rounded-full font-semibold">
            HTML
          </span>
          <span className="bg-green-800 text-green-200 px-4 py-2 rounded-full font-semibold">
            CSS
          </span>
          <span className="bg-green-800 text-green-200 px-4 py-2 rounded-full font-semibold">
            JavaScript
          </span>
          <span className="bg-green-800 text-green-200 px-4 py-2 rounded-full font-semibold">
            Python
          </span>
          <span className="bg-green-800 text-green-200 px-4 py-2 rounded-full font-semibold">
            Pytorch
          </span>
          <span className="bg-green-800 text-green-200 px-4 py-2 rounded-full font-semibold">
            Huggingface
          </span>
          <span className="bg-green-800 text-green-200 px-4 py-2 rounded-full font-semibold">
            OpenAI
          </span>
          <span className="bg-green-800 text-green-200 px-4 py-2 rounded-full font-semibold">
            SQLite
          </span>
          <span className="bg-green-800 text-green-200 px-4 py-2 rounded-full font-semibold">
            Cloudinary
          </span>
          <span className="bg-green-800 text-green-200 px-4 py-2 rounded-full font-semibold">
            Stripe
          </span>
        </div>
      </div>
      <div className="mt-6 max-w-[62vw]">
        <h2 className="text-3xl font-semibold text-green-200 mb-2">
          Reflection
        </h2>
        <p className="text-green-100 text-lg">
          Rewwwind was a collaborative effort with Benny, Femina, and Ryan, to create a platform that encourages sustainable consumption and sharing of vinyl records and books. Working on this project allowed me to explore new technologies, work closely with a diverse team, and make a positive impact. It was a rewarding experience that deepened my appreciation for both technology and sustainability.
        </p>
      </div>
      <motion.div
        className="mt-10 flex flex-col items-center"
        whileHover={{ scale: 1.1 }}
      >
        <a
          href="https://github.com/qeelol/rewwwind"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-500 via-green-700 to-green-900 p-4 px-8 rounded-lg 
          flex items-center gap-2 font-semibold text-lg text-white transition"
        >
          <SiGithub className="text-2xl" />
          View on GitHub
        </a>
      </motion.div>
    </motion.div>
  );
};

export default RewwwindProjectPage;
