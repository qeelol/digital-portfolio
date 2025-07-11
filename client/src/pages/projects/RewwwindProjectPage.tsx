import { motion } from "framer-motion";
import { FaArrowLeftLong } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const RewwwindProjectPage = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="flex flex-col gap-20 pt-40 pb-30 items-center px-10 bg-green-900/30 relative"
    >
      <div 
      onClick={(e) => {
        e.stopPropagation();
        navigate("/projects");
      }}
      className="flex gap-2 absolute left-10 top-30 items-center cursor-pointer hover:text-green-400 transition">
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
      <div className="mt-6 max-w-[62vw] text-green-100">
        <h2 className="text-3xl font-semibold text-green-200 mb-6 text-center">
          Design & Development Process
        </h2>
        <div className="flex flex-col gap-14">
          <div>
            <h3 className="text-2xl font-bold text-green-300 mb-4">1. Conceptualization & Planning</h3>
            <ul className="list-disc pl-6 space-y-8 text-lg">
              <li>
                <span className="font-semibold text-green-200">Problem Identification:</span> Identified the niche for eco-friendly consumption within the vinyl and book communities, leading to the concept of a secondhand marketplace.
              </li>
              <li>
                <span className="font-semibold text-green-200">Defining Features:</span> Outlined core functionalities such as product listings, user accounts, search and filter options, and a secure payment gateway.
              </li>
              <li>
                <span className="font-semibold text-green-200">Technology Stack Selection:</span> Chose Flask for the backend due to its lightweight nature and Python's ecosystem, paired with HTML, CSS, and JavaScript for the frontend.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-green-300 mb-4">2. Database Design & API Development</h3>
            <ul className="list-disc pl-6 space-y-8 text-lg">
              <li>
                <span className="font-semibold text-green-200">Data Modeling:</span> Designed the SQLite database schema to efficiently store user, product, order, and review information.
              </li>
              <li>
                <span className="font-semibold text-green-200">RESTful API Endpoints:</span> Developed Flask API endpoints for user authentication, product management (CRUD operations), search, and checkout processes.
              </li>
              <li>
                <span className="font-semibold text-green-200">External Integrations:</span> Integrated third-party APIs for image hosting (Cloudinary), payment processing (Stripe), and advanced features like AI Image Mapping (OpenAI, Huggingface, Pytorch).
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-green-300 mb-4">3. Frontend Implementation & UI/UX</h3>
            <ul className="list-disc pl-6 space-y-8 text-lg">
              <li>
                <span className="font-semibold text-green-200">Static Page Development:</span> Built the core HTML and CSS structure for product listings, detail pages, user profiles, and the checkout flow.
              </li>
              <li>
                <span className="font-semibold text-green-200">Interactive Elements:</span> Implemented dynamic features using vanilla JavaScript for form validations, shopping cart functionality, and asynchronous data fetching.
              </li>
              <li>
                <span className="font-semibold text-green-200">Responsive Design:</span> Ensured the website was fully responsive, providing an optimal viewing experience across various devices and screen sizes.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-green-300 mb-4">4. Deployment & Continuous Improvement</h3>
            <ul className="list-disc pl-6 space-y-8 text-lg">
              <li>
                <span className="font-semibold text-green-200">Deployment Strategy:</span> Deployed the Flask application to Render.com, configuring the necessary environment variables and build processes.
              </li>
              <li>
                <span className="font-semibold text-green-200">Version Control:</span> Managed codebase using Git and GitHub, facilitating collaborative development and tracking changes.
              </li>
              <li>
                <span className="font-semibold text-green-200">Testing & Refinement:</span> Conducted thorough testing to identify and resolve bugs, ensuring a stable and user-friendly experience before public launch.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 max-w-[62vw]">
        <h2 className="text-3xl font-semibold text-green-200 mb-2">
          Reflection
        </h2>
        <p className="text-green-100 text-lg">
          Rewwwind was a collaborative effort with Benny, Femina, and Ryan, to create a platform that encourages sustainable consumption and sharing of vinyl records and books. Working on this project allowed me to explore new technologies and make a positive impact. It was a rewarding experience that deepened my appreciation for both technology and sustainability.
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
