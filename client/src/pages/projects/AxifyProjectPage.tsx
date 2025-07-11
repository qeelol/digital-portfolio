import { motion } from "framer-motion";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const axifyEvents = [
  {
    img: "/blog/technopreneurship.jpeg",
    title: "Technopreneurship Day",
    desc: "Me and Sean attended the Technopreneurship Day organised by the Technopreneurship Student Interest Group in Nanyang Polytechnic. There, we pitched Axify to (from left to right), Mr. Briere, Dr. Uma, and Mr. Arun, who have decades of experience in the technology industry as well as looking to build their own start-ups.",
  },
  {
    img: "/blog/block71.jpeg",
    title: "Pitching at Block 71",
    desc: "Me and Sean also went to Block 71, where we pitched Axify to fellow start-ups and also SMEs.",
  },
];

const AxifyProjectPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="flex flex-col gap-20 py-40 pb-30 items-center px-10 bg-purple-900/30 relative"
    >
      <div 
      className="flex gap-2 absolute left-10 top-30 items-center cursor-pointer hover:text-purple-400 transition"
      onClick={(e) => {
        e.stopPropagation();
        navigate('/projects')
      }}
      >
        <FaArrowLeftLong/>
        Go Back
      </div>
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-5xl p-3 font-bold text-center bg-gradient-to-r from-purple-300 via-purple-400 to-purple-600 bg-clip-text text-transparent">
          Axify: AI Marketplace
        </h1>
        <p className="text-xl text-purple-100 text-center max-w-[40vw]">
          Why Google for AI solutions, when you can "axe" the time taken to find
          your desired solution? Axify is a marketplace for AI services, built by a
          passionate team of students to bridge the gap between AI creators and
          users.
        </p>
        <motion.div
          whileHover={{scale:1.1}}
          className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-900 p-4 px-8 rounded-lg 
                  flex gap-3 items-center font-semibold cursor-not-allowed text-lg"
          title="Sorry for the inconvenience, please check again later!"
                  >
          Live Demo Unavailable
        </motion.div>
      </div>

      <div className="p-7 bg-black rounded-xl">
        <img src="/digital-portfolio//projects/axify.png" className=" max-h-[75vh]"></img>
      </div>

      <div className="mt-6">
        <h2 className="text-3xl font-semibold text-purple-200 mb-2">
          Project Timeline
        </h2>
        <ul className="list-disc pl-6 text-purple-100 text-lg">
          <li>
            <span className="font-bold text-purple-300">April 2025:</span>{" "}
            Project kickoff and team formation
          </li>
          <li>
            <span className="font-bold text-purple-300">May 2025:</span> First
            prototype and Technopreneurship Day pitch
          </li>
          <li>
            <span className="font-bold text-purple-300">June 2025:</span> Block
            71 pitch and user feedback
          </li>
          <li>
            <span className="font-bold text-purple-300">August 2025:</span> Final
            release and marketplace launch
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-3xl font-semibold text-purple-200 mb-2">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-4 max-w-[62vw]">
          <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full font-semibold">
            Vite
          </span>
          <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full font-semibold">
            React
          </span>
          <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full font-semibold">
            HTML
          </span>
          <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full font-semibold">
            Tailwind
          </span>
          <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full font-semibold">
            Framer
          </span>
          <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full font-semibold">
            JavaScript
          </span>
          <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full font-semibold">
            Flask
          </span>
          <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full font-semibold">
            Python
          </span>
          <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full font-semibold">
            Scikit
          </span>
          <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full font-semibold">
            Gemini
          </span>
          <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full font-semibold">
            Postgresql
          </span>
          <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full font-semibold">
            Amazon
          </span>
        </div>
      </div>
      <div className="mt-6 max-w-[62vw] text-purple-100">
        <h2 className="text-3xl font-semibold text-purple-200 mb-6 text-center">
          Design & Development Process
        </h2>
        <div className="flex flex-col gap-14">
          <div>
            <h3 className="text-2xl font-bold text-purple-300 mb-4">1. Conceptualization & Research</h3>
            <ul className="list-disc pl-6 space-y-8 text-lg">
              <li>
                <span className="font-semibold text-purple-200">Market Need Analysis:</span> Identified the growing demand for accessible AI solutions and the fragmentation of existing marketplaces, leading to the concept of Axify.
              </li>
              <li>
                <span className="font-semibold text-purple-200">Target Audience Definition:</span> Focused on both AI creators (developers, researchers) and AI users (businesses, individuals) to understand their unique needs and pain points.
              </li>
              <li>
                <span className="font-semibold text-purple-200">Feature Brainstorming:</span> Prioritized core features such as AI service listing, search and filtering, user reviews, and secure transaction capabilities.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-purple-300 mb-4">2. Frontend Development & User Interface</h3>
            <ul className="list-disc pl-6 space-y-8 text-lg">
              <li>
                <span className="font-semibold text-purple-200">Frontend Framework:</span> Utilized React.js with Vite for a modern, component-based frontend, ensuring a dynamic and responsive user interface.
              </li>
              <li>
                <span className="font-semibold text-purple-200">Styling with Tailwind CSS:</span> Employed Tailwind CSS for efficient and consistent styling, enabling rapid UI development and easy customization.
              </li>
              <li>
                <span className="font-semibold text-purple-200">Interactive Elements:</span> Integrated Framer Motion for smooth animations and transitions, enhancing the overall user experience and visual appeal.
              </li>
              <li>
                <span className="font-semibold text-purple-200">User Experience Design:</span> Focused on creating intuitive navigation, clear information hierarchy, and an aesthetically pleasing design to facilitate easy discovery and use of AI services.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-purple-300 mb-4">3. System Architecture & Backend Development</h3>
            <ul className="list-disc pl-6 space-y-8 text-lg">
              <li>
                <span className="font-semibold text-purple-200">Backend Framework Selection:</span> Chose Flask and Express.js for their simplicity and flexibility, allowing for rapid API development and integration with AI models.
              </li>
              <li>
                <span className="font-semibold text-purple-200">Database Design:</span> Designed a PostgreSQL database schema to manage user profiles, AI service listings, transaction data, and review information.
              </li>
              <li>
                <span className="font-semibold text-purple-200">AI Integration Strategy:</span> Planned the integration of various AI models and APIs, including Scikit-learn and Google Gemini, to power different services on the marketplace.
              </li>
              <li>
                <span className="font-semibold text-purple-200">API Development:</span> Built robust RESTful APIs to handle user authentication, service creation, search, and interaction with AI models.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-purple-300 mb-4">4. Deployment & Iteration</h3>
            <ul className="list-disc pl-6 space-y-8 text-lg">
              <li>
                <span className="font-semibold text-purple-200">Cloud Deployment:</span> Deployed the application on Amazon Web Services (AWS), configuring necessary services for hosting, database, and API endpoints.
              </li>
              <li>
                <span className="font-semibold text-purple-200">User Feedback & Refinement:</span> Actively sought and incorporated user feedback from pitches and early testing to iteratively improve features and usability.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap gap-8 items-center justify-center w-full mb-6">
        {axifyEvents.map((event, i) => (
          <div
            key={i}
            className="flex items-center gap-5 bg-purple-950/80 rounded-xl shadow-lg p-4 border-2 border-purple-700 flex-1 w-[60vw]"
          >
            <img
              src={`/digital-portfolio/${event.img}`}
              alt={event.title}
              className="rounded-xl max-w-100 mb-3 border border-purple-700"
            />
            <div>
              <h3 className="text-xl font-bold text-purple-200 mb-2">
                {event.title}
              </h3>
              <p className="text-purple-100 text-base">
                {event.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 max-w-[62vw]">
        <h2 className="text-3xl font-semibold text-purple-200 mb-2">
          Reflection
        </h2>
        <p className="text-purple-100 text-lg">
          Axify was built together with Benny, Jun Hong, and Sean. What started
          as a school project soon became a business opportunity for us. We learned
          to collaborate, pitch to real investors, and build a product that solves
          real problems. The journey was challenging but rewarding, and it has
          inspired us to keep innovating.
        </p>
      </div>
    </motion.div>
  );
};

export default AxifyProjectPage;
